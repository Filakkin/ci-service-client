import BuildNumber from './BuildNumber';


const BuildMeta = ({ number, status, name }) => {
    return (
        <div className='BuildMeta'>
            <BuildNumber buildNumber={number} buildStatus={status}/>
            {!!name && name}
        </div>
    )
}


export default BuildMeta;