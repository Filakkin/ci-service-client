import { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';
import StartScreen from './pages/startScreen';
import Settings from './pages/settings';
import BuildHistory from './pages/buildHistory';
import Footer from './components/Footer/Footer';
import FooterMenu from './components/Footer/FooterMenu';
import Copyright from './components/Footer/Copyright';
import Link from './components/Link/Link';
import AppContext from './AppContext';


function App() {
  const [state, dispatch] = useReducer(reducer, {settings: {interval: 10}});

  return (
    <Router>
      <div className='App'>
        <Switch>
          <AppContext.Provider value={{state, dispatch}}>
            <Route exact path="/">
              {!!state?.settings?.repository ? <BuildHistory /> : <StartScreen />}
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </AppContext.Provider>
        </Switch>
      </div>
      <Footer>
        <FooterMenu>
          <Link url="#" text='Support' />
          <Link url="#" text='Learning' />
          <Link url="#" text='Русская версия' />
        </FooterMenu>
        <Copyright holder='Kalifkin Stanislav' />
      </Footer>
    </Router>
  );
}

const reducer = (state, action) => {
  switch (action.type) {
      case 'save_settings':
          return { ...state, settings: action.value };
      default:
  }
}

export default App;
