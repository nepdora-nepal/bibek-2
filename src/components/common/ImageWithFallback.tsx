"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { getImageUrl } from "@/config/site";

interface ImageWithFallbackProps extends ImageProps {
    fallbackSrc: string;
}

const ImageWithFallback = (props: ImageWithFallbackProps) => {
    const { src, fallbackSrc, alt, ...rest } = props;
    const initialSrc = typeof src === 'string' ? getImageUrl(src) : src;
    const [imgSrc, setImgSrc] = useState(initialSrc);

    useEffect(() => {
        setImgSrc(typeof src === 'string' ? getImageUrl(src) : src);
    }, [src]);

    return (
        <Image
            {...rest}
            className={`${rest.className || ''} ${rest.id ? 'cursor-pointer' : ''}`}
            src={imgSrc}
            alt={alt}
            onClick={(e) => {
                // Log the ID if it exists, to identify which image is selected
                if (rest.id) {
                    console.log("Image selected:", rest.id);
                }
                // Call the original onClick if provided
                if (rest.onClick) {
                    rest.onClick(e);
                }
            }}
            onError={() => {
                if (imgSrc !== fallbackSrc) {
                    setImgSrc(fallbackSrc);
                }
            }}
        />
    );
};

export default ImageWithFallback;
