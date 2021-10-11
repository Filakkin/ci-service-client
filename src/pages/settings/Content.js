import { useState } from "react";
import { useHistory } from "react-router-dom";

import './styles.scss';
import TextInput from "../../components/Inputs/TextInput/TextInput";
import NumberInput from "../../components/Inputs/NumberInput/NumberInput";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import Button from "../../components/Button/Button";


const Content = ({ repository, setRepository }) => {
    let history = useHistory();
    const [repo, setRepo] = useState(repository);
    const [command, setCommand] = useState('');
    const [branch, setBranch] = useState('');

    const handleSave = () => {
        setRepository(repo);
        history.push("/build-history");
    }

    const handleCancel = () => {
        history.goBack();
    }

    return (
        <div className='SettingsContent'>
            <h3>Settings</h3>
            <p>Configure repository connection and synchronization settings.</p>
            <TextInput label='GitHub repository' value={repo} setValue={setRepo} isRequired placeholder='user-name/repo-name'/>
            <TextInput label='Build command' value={command} setValue={setCommand} isRequired placeholder='npm start'/>
            <TextInput label='Main branch' value={branch} setValue={setBranch} placeholder='main'/>
            <NumberInput label='Synchronize every' defaultValue={10} unit='minutes'/>
            <ButtonGroup>
                <Button size='large' text='Save' onClick={handleSave} isPrimary type='submit'/>
                <Button size='large' text='Cancel' onClick={handleCancel}/>
            </ButtonGroup>
        </div>
    );
}


export default Content;