import Portal from "../../../components/Portal/Portal";
import '../styles.scss';
import Content from "./Content";


const Modal = (props) => {
    return (
        <Portal className='SettingsModal' parentId='modal'>
            <Content onRun={props.onOk}/>
        </Portal>
    )
}


export default Modal;