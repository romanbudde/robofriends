import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// We import the object robots from that file. That file could also have other objects that we'd want to import.
// In such cases, we just write the other objects separated by a comma ',': import { robots, cats, dogs } from ...
// import { robots } from './robots';

ReactDOM.render(<React.StrictMode>
		<App />
	</React.StrictMode>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
