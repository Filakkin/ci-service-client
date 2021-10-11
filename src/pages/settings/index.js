import SettingsHeader from "./Header/SettingsHeader";
import Content from "./Content";
import AppContext from "../../AppContext";


const Settings = () => {
    return (
        <div className="Settings">
            <SettingsHeader />
            <AppContext.Consumer>
                {({state, dispatch}) => <Content state={state} dispatch={dispatch}/>}
            </AppContext.Consumer>
        </div>
    );
}


export default Settings;