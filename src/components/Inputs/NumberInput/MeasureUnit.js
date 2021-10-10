import '../styles.scss';


const MeasureUnit = ({ name }) => {
    return (
        <div className='MeasureUnit'>
            {!!name && name}
        </div>
    )
}


export default MeasureUnit;