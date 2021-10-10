import DefaultHeader from "./DefaultHeader/DefaultHeader";
import ActiveHeader from "./ActiveHeader/ActiveHeader";


const Header = ({ repository }) => {
    return !!repository ?
        <ActiveHeader text={repository}/> : <DefaultHeader/>
}


export default Header;