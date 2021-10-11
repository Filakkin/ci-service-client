import './styles.scss';
import BuildInfo from "../../components/BuildInfo/BuildInfo"
import Button from "../../components/Button/Button";


const Content = ({ showModal, setShowModal }) => {
    return (
        <div className='BuildHistoryContent'>
            <BuildInfo props={{commitInfo:{message: 'Fix', author: 'Frank', branch: 'main', hash: '914123adsf'}, buildInfo: {status: 'done', number: 1984, startDate: '10 окт 2021, 22:00', duration: '15 мин'}}}/>
            <BuildInfo props={{commitInfo:{message: 'add new function', author: 'Frank', branch: 'main', hash: 'sdf123adsf'}, buildInfo: {status: 'building', number: 1983, startDate: '10 окт 2021, 22:00', duration: '15 мин'}}}/>
            <BuildInfo props={{commitInfo:{message: 'sleep deprevation', author: 'Frank', branch: 'main', hash: 'aev123adsf'}, buildInfo: {status: 'error', number: 1982, startDate: '10 окт 2021, 22:00', duration: '15 мин'}}}/>
            <Button size='small' text='Show more'/>
        </div>
    )
}


export default Content;