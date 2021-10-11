import '../styles.scss';
import Header from "../../../components/Headers/Header";
import HeaderText from "../../../components/Headers/HeaderText";
import ButtonGroup from "../../../components/ButtonGroup/ButtonGroup";
import Button from "../../../components/Button/Button";


const Content = ({onRun: onOk}) => {

    return (
        <div className='SettingsModal'>
            <div className='SettingsModalContent'>
            <Header>
                <HeaderText text='Validation error'/>
            </Header>
            <p>Fill values for all required fields</p>
            <ButtonGroup>
                <Button size='large' text='OK' onClick={onOk} isPrimary/>
            </ButtonGroup>
            </div>
        </div>
    )
}


export default Content;