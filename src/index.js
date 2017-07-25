import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import configureSotre from './store/configureStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const store = configureStore();

ReactDOM.render(
        <App />,document.getElementById('root') 
)
registerServiceWorker();
