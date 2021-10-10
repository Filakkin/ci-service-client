import './styles.scss';
import MetaInformation from "../MetaInformation/MetaInformation"
import MetaIcons from "../MetaInformation/Icons/Icons";


const DateTime = ({ date, time }) => {
    return (
        <div className='DateTime'>
            <MetaInformation icon={MetaIcons.Type.CALENDAR} primaryText={date}/>
            <MetaInformation icon={MetaIcons.Type.STOPWATCH} primaryText={time}/>
        </div>
    )
}


export default DateTime;