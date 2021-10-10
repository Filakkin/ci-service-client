import './styles.scss';


const Link = ({ url, text }) => {
    return <a className='Link' href={url}>{text}</a>
}


export default Link;