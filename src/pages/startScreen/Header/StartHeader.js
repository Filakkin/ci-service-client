import { useHistory } from "react-router-dom";

import Header from "../../../components/Headers/Header";
import HeaderText from "../../../components/Headers/HeaderText";
import Button from "../../../components/Button/Button";
import ButtonGroup from "../../../components/ButtonGroup/ButtonGroup";
import ButtonIcons from "../../../components/Button/Icons/Icons";


const StartHeader = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push("/settings");
    }

    return (
        <Header className='Header-default'>
            <HeaderText text='School CI server'/>
            <ButtonGroup>
                <Button text='Settings' icon={ButtonIcons.Type.COG} size='small' onClick={handleClick}/>
            </ButtonGroup>
        </Header>
    )
}


export default StartHeader;