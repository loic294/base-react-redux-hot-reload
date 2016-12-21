// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, combineReducers  } from 'redux';
// import reducers from './reducers'
import { Router, Route, browserHistory } from 'react-router'

import App from './app'
// import App from './containers/AppContainer'
// import NotFound from './components/NotFound.js';

// let store = window.store = createStore(combineReducers(reducers));
// const history = syncHistoryWithStore(browserHistory, store);

// <Route path="/home" component={} />
// <Route path="*" component={NotFound} />



ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/home" component={App}></Route>
    </Router>,
  document.getElementById('content')
);
