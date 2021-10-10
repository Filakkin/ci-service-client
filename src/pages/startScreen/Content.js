import { useHistory } from 'react-router-dom';

import './styles.scss';
import { ReactComponent as Logo } from "./logo 3.svg";
import Button from '../../components/Button/Button';


const Content = () => {
    let history = useHistory();
    return (
        <div className='Content'>
            <Logo />
            <p>
                Configure repository connection<br/>
                and synchronization settings
            </p>
            <Button text='Open settings' isPrimary size='large' onClick={() => history.push("/settings")}/>
        </div>
    );
}


export default Content;