import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
import {Loader,Dimmer} from 'semantic-ui-react';

const Spinner =()=>(
	<Dimmer active>
	<Loader size="huge" content={" Hold Tight ... "} />
	</Dimmer>)
export default Spinner;