/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React, { FC, memo, HTMLAttributes, useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import classnames from 'classnames';
import defaultImage from '@/assets/images/icon/bg-logo-icon.svg';

interface ImagelazyProps extends HTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    imageClassName?: string | undefined;
    boxClassName?: string | undefined;
}

const Placeholder = () => (
    <div className="bg-[#423F3A] w-full h-full flex justify-center items-center rounded-[8px]">
        <img src={defaultImage} alt="" className="w-[80px]" />
    </div>
);

const ImageLazy: FC<ImagelazyProps> = ({
    src,
    alt,
    imageClassName,
    boxClassName,
}) => {
    const [imageUrl, setImageUrl] = useState(src ?? '');
    const [loadFail, setLoadFail] = useState(false);
    useEffect(() => {
        setImageUrl(src);
    }, [src]);
    return (
        <LazyLoad
            className={classnames(boxClassName)}
            placeholder={<Placeholder />}
        >
            {loadFail ? (
                <Placeholder />
            ) : (
                <img
                    src={imageUrl}
                    alt={alt}
                    onError={() => {
                        setLoadFail(true);
                    }}
                    className={imageClassName}
                />
            )}
        </LazyLoad>
    );
};

export default memo(ImageLazy);
