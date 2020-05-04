import React from 'react';
import {Grid,Form,Segment,Button,Header,Message,Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';
import md5 from 'md5';

class Register extends React.Component{

state={
	username:'',
	email:'',
	password:'',
	passwordConfirmation:'',
	errors:[],
	Loading:false,
	usersRef:firebase.database().ref('users'),

}

isFormEmpty=({username,email,password,passwordConfirmation})=>{
	return !username.length||!email.length||!password.length||!passwordConfirmation.length;

}
isPasswordValid=({password,passwordConfirmation})=>{
	if(password.length<6||passwordConfirmation.length<6){
		return false;
	}else if(password !==passwordConfirmation){
		return false;
	}
	else{
		return true;
	}
}

isFormValid=()=>{
	let errors=[];
	let error;

	if(this.isFormEmpty(this.state))
	{
		error={message:" Fill in all the Fields"};
		this.setState({errors:errors.concat(error)});
		return false;
	}else if(!this.isPasswordValid(this.state)){
		error={ message:" Passwords are invalid"};
		this.setState({errors:errors.concat(error)});
		return false;
	}else{
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

saveUser= createdUser=>{
	return this.state.usersRef.child(createdUser.user.uid).set({
		name:createdUser.user.displayName,
		avatar:createdUser.user.photoURL
	});
}

handleSubmit=event=>{
	event.preventDefault();
	if(this.isFormValid()){
	this.setState({ errors :[],Loading:true});	
	firebase
	.auth()
	.createUserWithEmailAndPassword(this.state.email,this.state.password)
	.then(createdUser=>{
		console.log(createdUser);
		createdUser.user.updateProfile({
			displayName:this.state.username,
			photoURL:`http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
		})
		.then(()=>{
			this.saveUser(createdUser).then(()=>{
				console.log("User Saved");
			})
			this.setState({Loading:false});
		})
		.catch(err=>{
			console.error(err);
			this.setState({ errors: this.state.errors.concat(err), Loading:false});
		})
		
	})
	.catch(err=>{
		console.error(err);
		this.setState({errors:this.state.errors.concat(err),Loading:false});
	});
}}

	render(){
		const {username,email,passwordConfirmation,password,errors,Loading}=this.state;

		return(
			<Grid textAlign="center" verticalAlign="middle" className="app">
			<Grid.Column style={{ maxWidth:450}}>
			<Header as='h1' icon color="orange" textAlign="center">
			<Icon name="puzzle piece" color="orange" />
			Register Pass
			</Header>
			<Form onSubmit={this.handleSubmit} size="large">
			<Segment stacked>
			<Form.Input fluid name="username" icon="user" iconPosition="left" placeholder="Username Baby" onChange={this.handleChange} value={username} type="text" className={this.handleInputError(errors,'username')} />
			<Form.Input fluid name="email" icon="mail" iconPosition="left" placeholder="Email Address babe" onChange={this.handleChange} value={email} type="email" className={this.handleInputError(errors,'email')} />
			<Form.Input fluid name="password" icon="lock" iconPosition="left" placeholder="Secret Password" onChange={this.handleChange} value={password} type="password" className={this.handleInputError(errors,'password')} />
			<Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left" placeholder="Password Confirmation" onChange={this.handleChange} value={passwordConfirmation} type="password" className={this.handleInputError(errors,'password')}/>
			
			<Button disabled={Loading} className={Loading? 'loading':''} color="orange" fluid size="medium">Submit </Button>
			</Segment>
			</Form>
			{errors.length>0 && (
				<Message error>
				<h3>Error</h3>
				{this.displayErrors(errors)}
				</Message>
				)}
			<Message> Already a User ?<Link to="/login"> Login </Link></Message>
			</Grid.Column>
			</Grid>
			)
		
	}
} 

export default Register;