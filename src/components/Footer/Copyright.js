import './styles.scss';


const Copyright = ({ holder }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='Copyright'>
            {`© ${currentYear} ${holder}`}
        </div>
    )
}


export default Copyright;