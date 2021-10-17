import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import './styles.scss';
import BuildInfo from "../../components/BuildInfo/BuildInfo"
import Button from "../../components/Button/Button";
import { fetchBuilds } from './reducer';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';


const renderBuildInfoList = (history) => {
    return history.map((build, i) => <BuildInfo props={build} key={i} />) || [];
}

const Content = () => {
    const history = useSelector((state) => state.builds.list);
    const loadingStatus = useSelector((state) => state.builds.status)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBuilds());
    }, []);

    return (
        <div className='BuildHistoryContent'>
            {renderBuildInfoList(history)}
            {
                loadingStatus === 'loading' ?
                    'Please wait..' :
                    <ButtonGroup>
                        <Button size='small' text='Show more' onClick={() => dispatch(fetchBuilds())} />
                    </ButtonGroup>
            }
        </div>
    );
}


export default Content;