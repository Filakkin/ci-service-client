import { createPortal } from "react-dom";

import { usePortal } from "./usePortal"


const Portal = ({children, parentId}) => {
    const target = usePortal(parentId);
    
    return createPortal(children, target);
}


export default Portal;