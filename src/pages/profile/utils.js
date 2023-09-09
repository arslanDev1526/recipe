import supabase from "../../../src/config/client";
import React, { useEffect, useState } from "react";


export const getImgUrl = async (path) => {
        return supabase.storage.from("tips").getPublicUrl(path);
};


const getImgUrls = async (data) => {
    const promise_urls = data.map((item => {
        return supabase.storage.from("tips").getPublicUrl(item.img_url);
    }))

    const urls = Promise.allSettled(promise_urls)
    return urls
};


export const useGetTips = () => {
    const [fetchError, setFetchError] = useState(null);
    const [tips, setTips] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchTips = async () => {
            setIsLoading(true);
            const { data, error } = await supabase.from("tips").select();
            const urls = await getImgUrls(data)
            console.log("URLS", urls)
            const modifiedData = data.map((item, index) => {
                return { ...item, path: item.img_url, img_url: urls[index]?.value?.data?.publicUrl,  }
            })

            console.log("URLS after", modifiedData)

            setIsLoading(false);
            if (error) {
                setFetchError("could not find the tips");
                setTips(null);
            }

            if (data) {
                setTips(modifiedData);
                setFetchError(null);
            }
        };

        fetchTips();
    }, []);

    return { tips, setTips, isLoading, fetchError }
}
