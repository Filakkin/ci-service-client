import './styles.scss';


const HeaderText = ({ text }) => {
    return (
        <div className='HeaderText'>
            {!!text && text}
        </div>
    )
}


export default HeaderText