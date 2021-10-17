import BuildMeta from './BuildMeta';
import CommitMeta from './CommitMeta';


const GeneralInfo = ({ buildInfo, commitInfo }) => {
    return (
        <div className='GeneralInfo'>
            <BuildMeta number={buildInfo?.number} status={buildInfo?.status} name={commitInfo?.message}/>
            <CommitMeta branch={commitInfo?.branch} hash={commitInfo?.hash} author={commitInfo?.author}/>
        </div>
    )
}




export default GeneralInfo;