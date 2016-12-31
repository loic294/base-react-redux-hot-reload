// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, combineReducers  } from 'redux';
// import reducers from './reducers'
import { Router, Route, browserHistory } from 'react-router'

import Login from './login'
import Signup from './signup'
import App from './components/app'
import Dashboard from './components/dashboard'
// import App from './containers/AppContainer'
// import NotFound from './components/NotFound.js';

// let store = window.store = createStore(combineReducers(reducers));
// const history = syncHistoryWithStore(browserHistory, store);

// <Route path="/home" component={} />
// <Route path="*" component={NotFound} />



ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="auth">
        <Route path="login" component={Login}></Route>
        <Route path="signup" component={Signup}></Route>
      </Route>

      <Route path="/" component={App}>
        <Route path="dashboard" component={Dashboard} />
      </Route>

    </Router>,
  document.getElementById('content')
);
