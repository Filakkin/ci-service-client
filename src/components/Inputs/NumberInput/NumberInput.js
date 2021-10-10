import InputLabel from "../InputLabel"
import MeasureUnit from './MeasureUnit';


const NumberInput = ({ label, value, unit, setValue }) => {
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