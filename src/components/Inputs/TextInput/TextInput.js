import { useRef } from 'react';
import '../styles.scss';
import ResetSvg from './Reset.js';
import InputLabel from '../InputLabel.js';

const TextInput = ({ label, placeholder, isRequired, value, setValue }) => {
    const inputRef = useRef(null);
    const handleResetClick = () => {
        setValue('');
        inputRef.current.focus();
    }
    const handleInputChange = event => {
        setValue(event.target.value);
    }

    return (
        <div className='TextInput'>
            <InputLabel label={label} isRequired={isRequired}/>
            <div className='TextInputContainer'>
                <input className='Input' placeholder={placeholder} value={value} onChange={handleInputChange} ref={inputRef} />
                {!!value && <ResetSvg onClick={handleResetClick} />}
            </div>
        </div>
    );
}



export default TextInput;