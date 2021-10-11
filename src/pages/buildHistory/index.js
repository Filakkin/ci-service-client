import { useState, useReducer } from "react";
import { useSelector } from "react-redux";

import { fetchBuilds, generateNewBuild } from "../../stub/api/fetchBuilds";
import BuildHistoryHeader from "./Header/BuildHistoryHeader";
import Content from "./Content";
import Modal from "./Modal";
import Context from "./Context";
import { buildReducer } from "./reducer";


const BuildHistory = () => {
    const [showModal, setShowModal] = useState(false);
    const [buildHistory, dispatch] = useReducer(buildReducer, fetchBuilds(5));
    const { repository } = useSelector(state => state.settings);

    const handleRun = (hash) => () => {
        dispatch({ type: 'push', value: generateNewBuild(hash) });
        setShowModal(false);
    };
    const handleCancel = () => { setShowModal(false) };

    return (
        <>
            <Context.Provider value={{ buildHistory, dispatch }}>
                <BuildHistoryHeader repository={repository} handleRun={handleRun} />
                <Context.Consumer>
                    {({ buildHistory, dispatch }) => <Content buildHistory={buildHistory} dispatch={dispatch} />}
                </Context.Consumer>

                {showModal && <Modal onRun={handleRun} onCancel={handleCancel} />}
            </Context.Provider>
        </>
    );
}


export default BuildHistory;