import { useState } from 'react';

import '../styles.scss';
import Header from "../../../components/Headers/Header";
import HeaderText from "../../../components/Headers/HeaderText";
import TextInput from "../../../components/Inputs/TextInput/TextInput";
import ButtonGroup from "../../../components/ButtonGroup/ButtonGroup";
import Button from "../../../components/Button/Button";


const Content = ({onRun, onCancel}) => {
    const [hash, setHash] = useState('');

    return (
        <div className='Modal'>
            <div className='ModalContent'>
            <Header>
                <HeaderText text='New build'/>
            </Header>
            <p>Enter the commit has which you want to build.</p>
            <TextInput placeholder='Commit hash' value={hash} setValue={setHash}/>
            <ButtonGroup>
                <Button size='large' text='Run build' onClick={onRun} isPrimary/>
                <Button size='large' text='Cancel' onClick={onCancel} />
            </ButtonGroup>
            </div>
        </div>
    )
}


export default Content;