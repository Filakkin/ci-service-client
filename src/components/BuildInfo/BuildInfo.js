import './styles.scss';
import Icons from './Icons/Icons';
import CardInfo from './CardInfo';


const BuildInfo = ({props}) => {
    const Icon = getIcon(props?.buildInfo?.status);

    return (
        <div className='BuildInfo'>
            <Icon/>
            <CardInfo buildInfo={props.buildInfo} commitInfo={props.commitInfo}/>
        </div>
    )
}

const getIcon = (buildStatus) => {
    switch (buildStatus) {
        case 'done':
            return Icons[Icons.Type.DONE];
        case 'building':
            return Icons[Icons.Type.IN_PROGRESS];
        case 'error':
            return Icons[Icons.Type.ERROR];
        default:
            return null;
    }
}


export default BuildInfo;