import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import firebase from './firebase';

import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

import { BrowserRouter as Router,Switch,Route,withRouter} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

class Root extends React.Component{
	componentDidMount(){
	firebase.auth().onAuthStateChanged(user=>{
		if(user){
			this.props.history.push('/');
		}
	})
}
	render(){
	return (
	<Switch>
	<Route path="/login" component={Login} />
	<Route path="/register" component={Register} />
	<Route path="/" component={App} />
	</Switch>	
);
}}

const RootWithAuth=withRouter(Root);



// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
	<Router>
    <RootWithAuth /></Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
