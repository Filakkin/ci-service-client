import HeaderText from "../HeaderText";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import Button from "../../Button/Button";
import Icons from "../../Button/Icons/Icons";


const ActiveHeader = ({ text }) => {
    return (
        <div className='Header Header-active'>
            <HeaderText text={text}/>
            <ButtonGroup>
                <Button text='Run build' icon={Icons.Type.PLAY} size='small'/>
                <Button icon={Icons.Type.COG} size='small'/>
            </ButtonGroup>
        </div>
    )
}


export default ActiveHeader;