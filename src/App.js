import './App.css';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Details from './pages/Detail';

function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/details">
        <Details />
      </Route>
    </Switch>
  );
}

export default App;
