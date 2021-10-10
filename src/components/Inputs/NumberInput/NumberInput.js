import { useState } from 'react';
import InputLabel from "../InputLabel"
import MeasureUnit from './MeasureUnit';


const NumberInput = ({ label, defaultValue, unit }) => {
    const [value, setValue] = useState(defaultValue);

    const handleInputChange = event => {
        setValue(event.target.value);
    }

    return (
        <div className='NumberInput'>
            <InputLabel label={label}/> 
            <input className='Input' type='number' value={value} onChange={handleInputChange} />
            <MeasureUnit name={unit}/>
        </div>
    )
}


export default NumberInput;