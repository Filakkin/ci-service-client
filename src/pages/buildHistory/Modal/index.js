import Portal from "../../../components/Portal/Portal";
import '../styles.scss';
import Content from "./Content";


const Modal = (props) => {
    return (
        <Portal className='Modal' parentId='modal'>
            <Content onRun={props.onRun} onCancel={props.onCancel}/>
        </Portal>
    )
}


export default Modal;