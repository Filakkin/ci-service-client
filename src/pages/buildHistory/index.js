import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { push } from "./reducer";
import { generateNewBuild } from "../../stub/api/fetchBuilds";
import BuildHistoryHeader from "./Header/BuildHistoryHeader";
import Content from "./Content";
import Modal from "./Modal";


const BuildHistory = () => {
    const [showModal, setShowModal] = useState(false);
    const { repository } = useSelector(state => state.settings);
    const dispatch = useDispatch();

    const handleRun = (hash) => () => {
        dispatch(push(generateNewBuild(hash)));
        setShowModal(false);
    };
    const handleCancel = () => { setShowModal(false) };

    return (
        <>
            <BuildHistoryHeader repository={repository} onRunClick={() => setShowModal(true)} />
            <Content />

            {showModal && <Modal onRun={handleRun} onCancel={handleCancel} />}
        </>
    );
}


export default BuildHistory;