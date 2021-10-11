import { useState } from "react";

import BuildHistoryHeader from "./Header/BuildHistoryHeader";
import AppContext from '../../AppContext';
import Content from "./Content";
import Modal from "./Modal";


const BuildHistory = () => {
    const [showModal, setShowModal] = useState(false);
    const handleRun = () => { setShowModal(!showModal)};
    const handleCancel = () => { setShowModal(!showModal)};

    return (
        <>
            <AppContext.Consumer>
                {({state}) => <BuildHistoryHeader repository={state?.settings?.repository} handleRun={handleRun}/>}
            </AppContext.Consumer>
            <Content/>

            {showModal && <Modal onRun={handleRun} onCancel={handleCancel}/>}
        </>
    )
}


export default BuildHistory;