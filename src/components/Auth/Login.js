import React from 'react';
import {Grid,Form,Segment,Button,Header,Message,Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';


class Login extends React.Component{

state={
	email:'',
	password:'',
	errors:[],
	Loading:false,
}

isFormEmpty=({username,email,password,passwordConfirmation})=>{
	return !email.length||!password.length;

}

isFormValid=({email,password})=>{
	let errors=[];
	let error;

	if(this.isFormEmpty(this.state))
	{
		error={message:" Fill in all the Fields"};
		this.setState({errors:errors.concat(error)});
		return false;
	}
	else{
		return true;
	}

}
handleChange=event=>{
	this.setState({[event.target.name]:event.target.value
	});
}

displayErrors=errors=> errors.map((error,i)=> <p key={i}>{error.message}</p>)

handleInputError=(errors,inputName)=>{
	return errors.some(error=>error.message.toLowerCase().includes(inputName))?"error":""
}


handleSubmit=event=>{
	event.preventDefault();
	if(this.isFormValid(this.state)){
	this.setState({ errors :[],Loading:true});
	firebase
	.auth()
	.signInWithEmailAndPassword(this.state.email,this.state.password)	
	.then(signedInUser=>{
		console.log(signedInUser);	
	})
	.catch(err=>{
		console.error(err);
		this.setState({
			errors:this.state.errors.concat(err),Loading:false
		});
	});
}}

	render(){
		const {email,password,errors,Loading}=this.state;

		return(
			<Grid textAlign="center" verticalAlign="middle" className="app">
			<Grid.Column style={{ maxWidth:450}}>
			<Header as='h1' icon color="violet" textAlign="center">
			<Icon name="code branch" color="violet" />
			Login Pass
			</Header>
			<Form onSubmit={this.handleSubmit} size="large">
			<Segment stacked>
			
			<Form.Input fluid name="email" icon="mail" iconPosition="left" placeholder=" Your Email" onChange={this.handleChange} value={email} type="email" className={this.handleInputError(errors,'email')} />
			<Form.Input fluid name="password" icon="lock" iconPosition="left" placeholder="Secret Password" onChange={this.handleChange} value={password} type="password" className={this.handleInputError(errors,'password')} />
			
			
			<Button disabled={Loading} className={Loading? 'loading':''} color="violet" fluid size="medium">Submit </Button>
			</Segment>
			</Form>
			{errors.length>0 && (
				<Message error>
				<h3>Error</h3>
				{this.displayErrors(errors)}
				</Message>
				)}
			<Message> Don't have an Account ? No Worry <Link to="/register"> Register </Link></Message>
			</Grid.Column>
			</Grid>
			)
		
	}
} 

export default Login;