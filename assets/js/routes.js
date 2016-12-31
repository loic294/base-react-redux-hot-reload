import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import reducers from './reducers/index'
import { Router, Route, browserHistory } from 'react-router'

import Login from './login'
import Signup from './signup'
import App from './components/app'
import Dashboard from './containers/dashboard'
import Clients from './containers/client'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="auth">
        <Route path="login" component={Login}></Route>
        <Route path="signup" component={Signup}></Route>
      </Route>

      <Route path="/" component={App}>
        <Route path="dashboard" component={Dashboard} />
        <Route path="clients" component={Clients} />
      </Route>

    </Router>
  </Provider>,
  document.getElementById('content')
);
