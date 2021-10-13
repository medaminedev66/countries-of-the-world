import './App.css';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Details from './pages/Detail';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
