import './App.scss';
import Icons from './components/Button/Icons/Icons.js';
import Button from './components/Button/Button.js';

function App() {
  return (
    <div className='Centered-div'>
      <Button icon={Icons.Type.COG} size='small'/>
    </div>
  );
}

export default App;
