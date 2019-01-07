import React from 'react';
import ReactDOM from 'react-dom';
import Store from './redux/store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const AppWithRedux = () => (
    <Store>
        <App/>
    </Store>
);

ReactDOM.render(<AppWithRedux />, document.getElementById('root'));
registerServiceWorker();
