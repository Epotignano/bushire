import { FireRef, UidRef } from '../constants/Commons';
import Firebase from 'firebase';

import {
  RECEIVE_SERVICES_DATA,
  AWAIT_NEW_SERVICE_RESPONSE,
  RECEIVE_NEW_SERVICE_RESPONSE,
  START_SERVICE_EDIT,
  FINISH_SERVICE_EDIT,
  SUBMIT_SERVICE_EDIT,
  EDITING_SERVICE,
  SUBMITTING_SERVICE,
  DISPLAY_ERROR,
  DISPLAY_MESSAGE
} from "../constants/ActionTypes";

let _instance = new Firebase(FireRef).child("services");
/*export function getAllServices(){
	return dispatch => {
		console.log(services);
	
        _instance.on('value', function(dataSnapshot) {
          dataSnapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item['.key'] = childSnapshot.key();
            services.push(item);
          });
          dispatch({type:LISTSERVICE_READ, items: services});
        });
        
	}
}*/
function validateService(values){
		if (!values.title || values.title.length < 5){
			return "A service title needs at least 10 characters to be worthy of sharing with the world!";
		}
	} 

	// called when the app starts. this means we immediately download all quotes, and 
	// then receive all quotes again as soon as anyone changes anything.
export function startListeningToServices(){
		return function(dispatch,getState){
			_instance.on("value",function(snapshot){
				dispatch({ type: RECEIVE_SERVICES_DATA, data: snapshot.val() });
			});
		}
	}
export function startServiceEdit(qid){
		return {type:START_SERVICE_EDIT,qid};
	}
export function cancelServiceEdit(qid){
		return {type:FINISH_SERVICE_EDIT,qid};
	}
export function deleteService(qid){
		return function(dispatch,getState){
			dispatch({type:SUBMIT_SERVICE_EDIT,qid});
			_instance.child(qid).remove(function(error){
				dispatch({type:FINISH_SERVICE_EDIT,qid});
				if (error){
					dispatch({type:DISPLAY_ERROR,error:"Deletion failed! "+error});
				} else {
					dispatch({type:DISPLAY_MESSAGE,message:"Service successfully deleted!"});
				}
			});
		};
	}
export function submitServiceEdit(qid,values){
		return function(dispatch,getState){
			var state = getState(),
				//username = "Miguel",
				//uid = "12",
				title = values.title,
				description = values.description,
				error = validateService(values);
			if (error){
				dispatch({type:DISPLAY_ERROR,error});
			} else {
				dispatch({type:SUBMIT_SERVICE_EDIT,qid});
				//_instance.child(qid).set({title,description,username,uid},function(error){
				_instance.child(qid).set({title,description},function(error){
					dispatch({type:FINISH_SERVICE_EDIT,qid});
					if (error){
						dispatch({type:DISPLAY_ERROR,error:"Update failed! "+error});
					} else {
						dispatch({type:DISPLAY_MESSAGE,message:"Update successfully saved!"});
					}
				});
			}
		};
	}
export function submitNewService(values){
		return function(dispatch,getState){
			var state = getState(),
				//username = "Miguel",
				//uid = "12",
				title = values.title,
				description = values.description,
				error = validateService(values);
			if (error){
				dispatch({type:DISPLAY_ERROR,error});
			} else {
				dispatch({type:AWAIT_NEW_SERVICE_RESPONSE});
				_instance.push({title,description},function(error){
					dispatch({type:RECEIVE_NEW_SERVICE_RESPONSE});
					if (error){
						dispatch({type:DISPLAY_ERROR,error:"Submission failed! "+error});
					} else {
						dispatch({type:DISPLAY_MESSAGE,message:"Submission successfully saved!"});
					}
				});
			}
		}
	}