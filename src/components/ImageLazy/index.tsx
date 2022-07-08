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
    iconClasssName?: string | undefined;
    boxIconClassName?: string | undefined;
}

interface PlaceholderProps {
    iconClasssName?: string | undefined;
    boxIconClassName?: string | undefined;
}
const Placeholder = ({
    iconClasssName = 'w-[80px]',
    boxIconClassName = 'w-full h-full',
}: PlaceholderProps) => (
    <div
        className={classnames(
            'bg-[#423F3A] flex justify-center items-center rounded-[8px]',
            boxIconClassName,
        )}
    >
        <img src={defaultImage} alt="" className={iconClasssName} />
    </div>
);

const ImageLazy: FC<ImagelazyProps> = ({
    src,
    alt,
    imageClassName,
    boxClassName,
    iconClasssName,
    boxIconClassName,
}) => {
    const [imageUrl, setImageUrl] = useState(src ?? '');
    const [loadFail, setLoadFail] = useState(false);
    useEffect(() => {
        setImageUrl(src);
    }, [src]);
    return (
        <LazyLoad
            className={classnames(boxClassName)}
            placeholder={<Placeholder iconClasssName={iconClasssName} />}
        >
            {loadFail ? (
                <Placeholder
                    iconClasssName={iconClasssName}
                    boxIconClassName={boxIconClassName}
                />
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
