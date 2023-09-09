import { createContext, useContext, useState } from "react";
import supabase from "../config/client";
import { useNavigate } from "react-router-dom";
import { useSelectImage } from "../utils/selectImage";
import { toast } from "react-toastify";

// .from("tips")
// .update({ title, description, img_url })
// .eq("id", id)
// .select();


// const { data, error } = await supabase
//   .from('countries')
//   .upsert({ id: 1, name: 'Albania' })
//   .select()


const uploadImage = async (image) => {
    if (!image) return { file: null, er: null };

    const { data: file, error: er } = await supabase.storage
        .from("tips")
        .upload(`public/${Date.now()}`, image, {
            cacheControl: "3600",
            upsert: true,
            allowedMimeTypes: ["image/*"],
        });

    return { file, er }
}

const TipContext = createContext();

export function useTipsContext() {
    return useContext(TipContext)
}

export function TipsProvider({ children }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ id: null, title: "", description: "", });
    const [formerror, setFormerror] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const {
        image,
        setImage,
        previewImageUrl,
        setPreviewImageUrl,
        clearImage,
    } = useSelectImage()


    const loadContextData = ({ id, title, description, previewImageUrl }) => {
        setFormData({ id, title, description })
        setPreviewImageUrl(previewImageUrl)
    }

    const reset = () => {
        setFormerror(null);
        setFormData({ title: "", description: "", })
        clearImage()
    }

    const handleChange = (e) => {
        e.preventDefault()
        const { target: { name, value } } = e
        setFormData({ ...formData, [name]: value })
    }

    const onImageChange = async (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        setImage(file)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsUploading(true);
        const { file, er } = await uploadImage(image)
        setIsUploading(false);

        const { id, title, description } = formData
        const img_url = (image) ? file.path : null

        if (!title) {
            setFormerror("Title is required");
            return;
        }

        if (!description) {
            setFormerror("Description is rquired");
            return;
        }

        if (!(img_url || previewImageUrl)) {
            setFormerror("Image is required");
            return;
        }

        setIsSubmitting(true);

        const { data, error } = await supabase
            .from('tips')
            .upsert({
                ...(id && { id }),
                ...(title && { title }),
                ...(description && { description }),
                ...(img_url && { img_url }),
            })
            .select()


        if (error) {
            setIsSubmitting(false);
            console.log(error);
            toast.error("*Failed Notification!", {
                autoClose: 1000,
            });
            setFormerror("Fill All Fields");
        }


        if (er) {
            throw new Error("Image uploading failed")
        }

        if (error) {
            throw new Error("Failed to pusblish")
        }

        if (data) {
            setIsSubmitting(false);
            // toast.success("Success Notification!", {
            //     autoClose: 1000,
            // });
            console.log(data, "postData");
            reset()
            return
        }
    };

    const WraperHandler = async (e) => {
        await toast.promise(
            handleSubmit(e),
            {
                pending: {
                    render() {
                        return "Publishing..."
                    },
                    icon: true,
                },
                success: {
                    render({ data }) {

                        return "Published successfully"
                    },
                    icon: true,

                    // icon: "🟢",
                },
                error: {
                    render({ data }) {
                        return "Failed to publish"
                    },
                    icon: true,
                }
            }
        )

        setTimeout(() => navigate("/profile"), 0)

    }


    console.log("provider tip", previewImageUrl)

    return (
        <TipContext.Provider
            value={{
                isSubmitting,
                isUploading,
                previewImageUrl,
                formData,
                formerror,
                handleChange,
                onImageChange,
                loadContextData,
                handleSubmit: WraperHandler,
            }}>
            {children}
        </TipContext.Provider>
    )
}


