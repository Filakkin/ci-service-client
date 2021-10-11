import Content from "./Content";
import StartHeader from "./Header/StartHeader";


const StartScreen = () => {
    return (
        <div className='StartScreen'>
            <StartHeader />
            <Content/>
        </div>
    );
}


export default StartScreen;