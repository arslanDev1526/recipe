import { createContext, useContext, useState } from "react";
import supabase from "../config/client";
import { useNavigate } from "react-router-dom";
import { useSelectImage } from "../utils/selectImage";
import { toast } from "react-toastify";


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
        console.log("REST")
        setFormerror(null);
        setFormData({ title: "", description: "", })
        setIsSubmitting(false)
        setIsUploading(false)
        clearImage()
    }

    const handleChange = (e) => {
        e.preventDefault()
        const { target: { name, value } } = e
        setFormData({ ...formData, [name]: value })
        setFormerror(null);
    }

    const onImageChange = async (e) => {
        e.preventDefault()
        setFormerror(null);
        const file = e.target.files[0];
        setImage(file)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsUploading(true);
        setIsSubmitting(true);
        const { file, er } = await uploadImage(image)
        if (er) {
            setIsUploading(false);
            throw new Error("Image uploading failed")
        }
        setIsUploading(false);

        const { id, title, description } = formData
        const img_url = (image) ? file.path : null

        if (!title && !description && !(img_url || previewImageUrl)) {
            setFormerror("All fields are required");
            throw new Error("All fields are required")
        }

        if (!title) {
            setFormerror("Title is required");
            throw new Error("Title is required")
        }

        if (!description) {
            setFormerror("Description is rquired");
            throw new Error("Description is rquired")
        }

        if (!(img_url || previewImageUrl)) {
            setFormerror("Image is required");
            throw new Error("Image is required")
        }

        const { error } = await supabase
            .from('tips')
            .upsert({
                ...(id && { id }),
                ...(title && { title }),
                ...(description && { description }),
                ...(img_url && { img_url }),
            })
            .select()

        if (error) {
            throw new Error("Failed to pubilsh")
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
                        return data?.message || "Failed to publish"
                    },
                    icon: true,
                }
            }
        )
        .then(() => {            
            setTimeout(() => {
                reset()
                navigate("/profile")}, 0)
        })
        .catch((e) => {
            setIsSubmitting(false)
            setIsUploading(false)
            console.log("error", e)
        })
    }



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
                reset,
                handleSubmit: WraperHandler,
            }}>
            { children }
        </TipContext.Provider>
    )
}


