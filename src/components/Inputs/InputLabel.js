import './styles.scss';

const InputLabel = ({ label, isRequired }) => {
    return (
        <div className='InputLabel'>
            {!!label && label} {isRequired && <em>*</em>}
        </div>
    )
}

export default InputLabel;