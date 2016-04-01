import {
  RECEIVE_VEHICLES_DATA,
  AWAIT_NEW_VEHICLE_RESPONSE,
  RECEIVE_NEW_VEHICLE_RESPONSE,
  START_VEHICLE_EDIT,
  FINISH_VEHICLE_EDIT,
  SUBMIT_VEHICLE_EDIT,
  EDITING_VEHICLE,
  SUBMITTING_VEHICLE
} from "../constants/ActionTypes";
import _ from 'lodash';

function vehicle(state = {
  hasreceiveddata: false,
  submittingnew: false,
  states: {}, // this will store per quote id if we're reading, editing or awaiting DB response
  data: {}
}, action) {
  var newstate;
  switch(action.type){
    case RECEIVE_VEHICLES_DATA:
      return Object.assign({},state,{
        hasreceiveddata: true,
        data: action.data
      });
    case AWAIT_NEW_VEHICLE_RESPONSE:
      return Object.assign({},state,{
        submittingnew: true
      });
    case RECEIVE_NEW_VEHICLE_RESPONSE:
      return Object.assign({},state,{
        submittingnew: false
      });
    case START_VEHICLE_EDIT:
      newstate = _.cloneDeep(state);
      newstate.states[action.id] = EDITING_VEHICLE;
      return newstate;
    case FINISH_VEHICLE_EDIT:
      newstate = _.cloneDeep(state);
      delete newstate.states[action.id];
      return newstate;
    case SUBMIT_VEHICLE_EDIT:
      newstate = _.cloneDeep(state);
      newstate.states[action.id] = SUBMITTING_VEHICLE;
      return newstate;
    default: return state;
  }
}

export default vehicle;
