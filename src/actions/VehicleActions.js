import { FireRef, UidRef } from '../constants/Commons';
import Firebase from 'firebase';

import {
  RECEIVE_VEHICLES_DATA,
  AWAIT_NEW_VEHICLE_RESPONSE,
  RECEIVE_NEW_VEHICLE_RESPONSE,
  START_VEHICLE_EDIT,
  FINISH_VEHICLE_EDIT,
  SUBMIT_VEHICLE_EDIT,
  EDITING_VEHICLE,
  SUBMITTING_VEHICLE,
  DISPLAY_ERROR,
  DISPLAY_MESSAGE
} from "../constants/ActionTypes";

let _instance = new Firebase(FireRef).child("vehicles");

function validateVehicle(values){
	if (!values.model || values.model.length < 5){
		return "A vehicle model needs at least 5 characters to be worthy of sharing with the world!";
	}
}

// called when the app starts. this means we immediately download all quotes, and 
// then receive all quotes again as soon as anyone changes anything.
export function startListeningToVehicles(){
	return function(dispatch,getState){
		_instance.on("value",function(snapshot){
			dispatch({ type: RECEIVE_VEHICLES_DATA, data: snapshot.val() });
		});
	}
}

export function startVehicleEdit(id){
	return {type:START_VEHICLE_EDIT,id};
}

export function cancelVehicleEdit(id){
	return {type:FINISH_VEHICLE_EDIT,id};
}

export function deleteVehicle(id){
		return function(dispatch,getState){
			dispatch({type:SUBMIT_VEHICLE_EDIT,id});
			_instance.child(id).remove(function(error){
				dispatch({type:FINISH_VEHICLE_EDIT,id});
				if (error){
					dispatch({type:DISPLAY_ERROR,error:"Deletion failed! "+error});
				} else {
					dispatch({type:DISPLAY_MESSAGE,message:"Service successfully deleted!"});
				}
			});
		};
	}
export function submitVehicleEdit(id,values){
		return function(dispatch,getState){
			var state = getState(),
				//username = "Miguel",
				//uid = "12",
				model = values.model,
				price = values.price,
				error = validateVehicle(values);
			if (error){
				dispatch({type:DISPLAY_ERROR,error});
			} else {
				dispatch({type:SUBMIT_VEHICLE_EDIT,id});
				_instance.child(id).set({model,price},function(error){
					dispatch({type:FINISH_VEHICLE_EDIT,id});
					if (error){
						dispatch({type:DISPLAY_ERROR,error:"Update failed! "+error});
					} else {
						dispatch({type:DISPLAY_MESSAGE,message:"Update successfully saved!"});
					}
				});
			}
		};
	}
export function submitNewVehicle(values){
		return function(dispatch,getState){
			var state = getState(),
				//username = "Miguel",
				//uid = "12",
				model = values.model,
				price = values.price,
				error = validateVehicle(values);
			if (error){
				dispatch({type:DISPLAY_ERROR,error});
			} else {
				dispatch({type:AWAIT_NEW_VEHICLE_RESPONSE});
				_instance.push({model,price},function(error){
					dispatch({type:RECEIVE_NEW_VEHICLE_RESPONSE});
					if (error){
						dispatch({type:DISPLAY_ERROR,error:"Submission failed! "+error});
					} else {
						dispatch({type:DISPLAY_MESSAGE,message:"Submission successfully saved!"});
					}
				});
			}
		}
	}