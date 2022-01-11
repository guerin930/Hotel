import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.css'
import * as serviceWorker from './serviceWorker';
import {RoomProvider} from './context'
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';

// outils du developpeurs
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <RoomProvider>
     <App />
  </RoomProvider>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
