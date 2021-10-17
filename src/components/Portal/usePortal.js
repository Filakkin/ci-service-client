import { useEffect, useRef } from "react";


export const usePortal = (parentId) => {
    const elementRef = useRef(null);

    const getElementRef = () => {
        if (!elementRef.current) {
            elementRef.current = document.createElement('div') ;
        }

        return elementRef.current;
    }

    useEffect(() => {
        const parent = document.querySelector(`#${parentId}`);
        parent.appendChild(getElementRef());

        return () => getElementRef().remove();
    }, [parentId]);


    return getElementRef();
}