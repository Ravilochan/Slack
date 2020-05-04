import * as actionTypes from '../actions/types';
import * as typer from'../actions/index';
import {combineReducers} from 'redux';

const initialUserState ={
	currentUser:null,
	isLoading:true
};

const user_reducer=(state=initialUserState,action)=>{
	switch(action,typer){
		case actionTypes.SET_USER:
		return{
			currentUser:action.payload.currentUser,
			isLoading:false,
		}
		default:
		return state;
	}
}

const rootReducer= combineReducers({
	user:user_reducer
});

export default rootReducer;