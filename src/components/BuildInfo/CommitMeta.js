import './styles.scss';
import MetaInformation from '../MetaInformation/MetaInformation';
import MetaIcons from '../MetaInformation/Icons/Icons';


const CommitMeta = ({ branch, hash, author }) => {
    return (
        <div className='CommitMeta'>
            <MetaInformation icon={MetaIcons.Type.COMMIT} primaryText={branch} secondaryText={hash}/>
            <MetaInformation icon={MetaIcons.Type.USER} primaryText={author}/>
        </div>
    )
}


export default CommitMeta;