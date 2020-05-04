import React from 'react';
import {Grid,Form,Segment,Button,Header,Message,Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Register extends React.Component{

state={
	username:'',
	email:'',
	password:'',
	passwordConfirmation:'',

}

handleChange=event=>{
	this.setState({[event.target.name]:event.target.value
	});
};

	render(){
		return(
			<Grid textAlign="center" verticalAlign="middle" className="app">
			<Grid.Column style={{ maxWidth:450}}>
			<Header as='h2' icon color="orange" textAlign="center">
			<Icon name="puzzle peice" color="blue" />
			Register Pass
			</Header>
			<Form size="large">
			<Segment stacked>
			<Form.Input fluid name="username" icon="user" iconPosition="left" placeholder="Username Baby" onchange={this.handleChange} type="text" />
			<Form.Input fluid name="email" icon="mail" iconPosition="left" placeholder="Email Address babe" onchange={this.handleChange} type="email" />
			<Form.Input fluid name="password" icon="lock" iconPosition="left" placeholder="Secret Password" onchange={this.handleChange} type="password" />
			<Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left" placeholder="Password Confirmation" onchange={this.handleChange} type="password" />
			
			<Button color="orange" fluid size="medium">Submit </Button>
			</Segment>
			</Form>
			<Message> Already a User ?<Link to="/login"> Login </Link></Message>
			</Grid.Column>
			</Grid>
			)
		
	}
} 

export default Register;