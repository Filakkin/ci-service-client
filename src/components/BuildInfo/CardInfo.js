import './styles.scss';
import GeneralInfo from "./GeneralInfo";
import DateTime from "./DateTime";


const CardInfo = ({ buildInfo, commitInfo }) => {
    return (
        <div className='CardInfo'>
            <GeneralInfo buildInfo={buildInfo} commitInfo={commitInfo}/>
            <DateTime date={buildInfo?.startDate} time={buildInfo?.duration}/>
        </div>
    )
}


export default CardInfo;