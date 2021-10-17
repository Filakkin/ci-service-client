import { useState, useReducer } from "react";

import { fetchBuilds, generateNewBuild } from "../../stub/api/fetchBuilds";
import BuildHistoryHeader from "./Header/BuildHistoryHeader";
import AppContext from '../../AppContext';
import Content from "./Content";
import Modal from "./Modal";
import Context from "./Context";
import { buildReducer } from "./reducer";


const BuildHistory = () => {
    const [showModal, setShowModal] = useState(false);
    const [buildHistory, dispatch] = useReducer(buildReducer, fetchBuilds(5));

    const handleRun = (hash) => () => {
        dispatch({ type: 'push', value: generateNewBuild(hash) });
        setShowModal(false);
    };
    const handleCancel = () => { setShowModal(false) };

    return (
        <>
            <Context.Provider value={{ buildHistory, dispatch }}>
                <AppContext.Consumer>
                    {({ state }) => <BuildHistoryHeader repository={state?.settings?.repository} onRunClick={() => setShowModal(true)} />}
                </AppContext.Consumer>
                <Context.Consumer>
                    {({ buildHistory, dispatch }) => <Content buildHistory={buildHistory} dispatch={dispatch} />}
                </Context.Consumer>

                {showModal && <Modal onRun={handleRun} onCancel={handleCancel} />}
            </Context.Provider>
        </>
    )
}


export default BuildHistory;