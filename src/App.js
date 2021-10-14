import './App.css';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Details from './pages/Detail';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/countries-of-the-world/">
          <Home />
        </Route>
        <Route path="/countries-of-the-world/details">
          <Details />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
