import { useEffect } from 'react';

export const useRemovetStyle = (className: string, attribute: string) => {
    useEffect(() => {
        let domList = document.getElementsByClassName(className);
        Array.from(domList).forEach((item) => {
            item.removeAttribute(attribute);
        });
    }, []);
};
