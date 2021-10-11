import SettingsHeader from "./Header/SettingsHeader";
import Content from "./Content";
import AppContext from "../../AppContext";


const Settings = () => {
    return (
        <>
            <SettingsHeader />
            <AppContext.Consumer>
                {({repository, setRepository}) => <Content repository={repository} setRepository={setRepository}/>}
            </AppContext.Consumer>
        </>
    );
}


export default Settings;