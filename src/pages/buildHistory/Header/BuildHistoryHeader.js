import { useHistory, Redirect } from "react-router";

import Header from "../../../components/Headers/Header";
import HeaderText from "../../../components/Headers/HeaderText";
import ButtonGroup from "../../../components/ButtonGroup/ButtonGroup";
import Button from "../../../components/Button/Button";
import ButtonIcons from "../../../components/Button/Icons/Icons";


const BuildHistoryHeader = ({ repository, onRunClick }) => {
    let history = useHistory();

    const handleSettingsClick = () => {
        history.push("/settings");
    }

    return !!repository ? (
        <Header>
            <HeaderText text={repository} />
            <ButtonGroup>
                <Button icon={ButtonIcons.Type.PLAY} text={'Run build'} size='small' onClick={onRunClick}/>
                <Button icon={ButtonIcons.Type.COG} size='small' onClick={handleSettingsClick} />
            </ButtonGroup>
        </Header>
    ) :
    <Redirect to='/' />
}


export default BuildHistoryHeader;