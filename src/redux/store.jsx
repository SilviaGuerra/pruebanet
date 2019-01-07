import React from 'react'; // eslint-disable-line
import { Provider } from "react-redux";
import { createStore, compose, combineReducers } from "redux";

import generalReducer from "./reducers/general";

const store = createStore(
	combineReducers({
		general: generalReducer
	}),
	compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

// eslint-disable-next-line
export default ({ children }) => (
	<Provider store={store}>
		{children}
	</Provider>
);
