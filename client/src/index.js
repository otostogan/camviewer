import React from 'react';
import { composeWithDevTools } from "redux-devtools-extension";
import * as actionCreators from "./redux/actions";
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import reducer from './redux/reducer';

import App from './components/app/App';

const composeEnhancers = composeWithDevTools({
	actionCreators,
	trace: true,
	traceLimit: 25,
  })
const store = createStore(reducer, composeEnhancers())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>
);
