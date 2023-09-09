import { createContext, useContext, useState } from "react";
import supabase from "../config/client";
import { useNavigate } from "react-router-dom";
import { useSelectImage } from "../utils/selectImage";
import { toast } from "react-toastify";

const TipContext = createContext();

export function useTipsContext() {
    return useContext(TipContext)
}

export function TipsProvider({ children }) {
    const [formData, setFormData] = useState({ title: "", description: "", });
    const [formerror, setFormerror] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isUploading, setIsUploading] = useState(false);


    const navigate = useNavigate();
    const { image, previewImageUrl, setPreviewImage, clearImage } = useSelectImage()


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
        setPreviewImage(file)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsUploading(true);
        const { data: file, error: er } = await supabase.storage
            .from("tips")
            .upload(`public/${Date.now()}`, image, {
                cacheControl: "3600",
                upsert: true,
                allowedMimeTypes: ["image/*"],
            });

        console.log("create new ", file);
        console.log("create img error ", er);
        if (file) {
            // setFormData({ ...formData, img_url: file.path });
            setIsUploading(false);
        }

        const img_url = file.path
        console.log("berfore validation ", file);
        const { title, description } = formData
        if (!title || !description || !img_url) {
            console.log("berfore validation ", { file, formData });

            setFormerror(" *Fill All Fields");
            return;
        }

        setIsSubmitting(true);
        const { data, error } = await supabase
            .from("tips")
            .insert([{ title, description, img_url }])
            .select();

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
                    icon: false,
                },
                success: {
                    render({ data }) {

                        return "Published successfully"
                    },
                    // icon: "🟢",
                },
                error: {
                    render({ data }) {
                        return "Failed to publish"
                    }
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
                handleSubmit: WraperHandler,
            }}>
            {children}
        </TipContext.Provider>
    )
}


