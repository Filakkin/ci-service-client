import Icons from "./Icons/Icons";
import Text from "../Text";
import './styles.scss';


const MetaInformation = ({ icon, primaryText, secondaryText }) => {
    var Icon = Icons[icon];
    return (
        <div className='MetaInformation'>
            {!!icon && <Icon className='MetaIcon'/>}
            <Text text={primaryText} className='PrimaryText'/>
            <Text text={secondaryText} className='SecondaryText'/>
        </div>
    )
}


export default MetaInformation;