import HeaderText from "../HeaderText";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import Button from "../../Button/Button";
import Icons from "../../Button/Icons/Icons";


const DefaultHeader = () => {
    return (
        <div className='Header Header-default'>
            <HeaderText text='School CI server'/>
            <ButtonGroup>
                <Button text='Settings' icon={Icons.Type.COG} size='small'/>
            </ButtonGroup>
        </div>
    )
}


export default DefaultHeader;