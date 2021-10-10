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

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <StartScreen />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/build-history">
            <BuildHistory />
          </Route>
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

export default App;
