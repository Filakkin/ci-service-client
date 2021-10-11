import { useState, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { saveSettings } from "./reducers";
import './styles.scss';
import TextInput from "../../components/Inputs/TextInput/TextInput";
import NumberInput from "../../components/Inputs/NumberInput/NumberInput";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import Button from "../../components/Button/Button";
import Modal from "./Modal";


const Content = ( ) => {
    let history = useHistory();
    const { settings } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [showError, setShowError] = useState(false);
    const [fields, fieldDispatch] = useReducer(
        reducer,
        {
            repository: { value: settings?.repository, isError: false },
            command: { value: settings?.command, isError: false },
            branch: { value: settings?.branch, isError: false },
            interval: { value: settings?.interval || 10, isError: false }
        });

    const handleSave = () => {
        let hasErrors = !(!!fields.command.value && !!fields.repository.value);
        if (hasErrors) {
            setShowError(true);
            return;
        }
        let value = {};
        Object.keys(fields).forEach(key => value[key] = fields[key].value);
        dispatch(saveSettings(value));
        history.push("/");
    }

    const handleCancel = () => {
        history.goBack();
    }

    return (
        <>
            <div className='SettingsContent'>
                <h3>Settings</h3>
                <p>Configure repository connection and synchronization settings.</p>
                <TextInput
                    label='GitHub repository'
                    value={fields.repository.value}
                    setValue={(value) => fieldDispatch({ type: 'set_repo', value })}
                    isRequired
                    isError={fields.repository.isError}
                    placeholder='user-name/repo-name' />
                <TextInput
                    label='Build command'
                    value={fields.command.value}
                    setValue={(value) => fieldDispatch({ type: 'set_command', value })}
                    isRequired
                    isError={fields.repository.isError}
                    placeholder='npm start' />
                <TextInput
                    label='Main branch'
                    value={fields.branch.value}
                    setValue={(value) => fieldDispatch({ type: 'set_branch', value })}
                    placeholder='main' />
                <NumberInput
                    label='Synchronize every'
                    value={fields.interval.value}
                    setValue={(value) => fieldDispatch({ type: 'set_interval', value })}
                    unit='minutes' />
                <ButtonGroup>
                    <Button size='large' text='Save' onClick={handleSave} isPrimary />
                    <Button size='large' text='Cancel' onClick={handleCancel} />
                </ButtonGroup>
            </div>
            {showError && <Modal onOk={() => setShowError(false)}/>}
        </>
    );
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'set_repo':
            return { ...state, repository: { value: action.value } };
        case 'set_command':
            return { ...state, command: { value: action.value } };
        case 'set_branch':
            return { ...state, branch: { value: action.value } };
        case 'set_interval':
            return { ...state, interval: { value: action.value } };
        default:
    }
}

export default Content;