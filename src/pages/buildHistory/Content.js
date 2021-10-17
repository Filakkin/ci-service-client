import { useState, useEffect } from 'react';


import './styles.scss';
import BuildInfo from "../../components/BuildInfo/BuildInfo"
import Button from "../../components/Button/Button";
import { fetchBuilds } from '../../stub/api/fetchBuilds';


const renderBuildInfoList = (history) => {
    return history.map((build, i) => <BuildInfo props={build} key={i}/>) || [];
}


const Content = ({ buildHistory, dispatch, showModal, setShowModal }) => {
    const [fetching, setFetching] = useState(true);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        setHistory(buildHistory)
        setFetching(false)
    }, [buildHistory]);
    
    return (
        <div className='BuildHistoryContent'>
            {renderBuildInfoList(history)}
            {fetching ? 'Please wait' : <Button size='small' text='Show more' onClick={() => {
                dispatch({type: 'add', value: fetchBuilds(5)}); setFetching(true)}}/>}
        </div>
    );
}


export default Content;