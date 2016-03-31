import {
  RECEIVE_SERVICES_DATA,
  AWAIT_NEW_SERVICE_RESPONSE,
  RECEIVE_NEW_SERVICE_RESPONSE,
  START_SERVICE_EDIT,
  FINISH_SERVICE_EDIT,
  SUBMIT_SERVICE_EDIT,
  EDITING_SERVICE,
  SUBMITTING_SERVICE
} from "../constants/ActionTypes";
import _ from 'lodash';

function service(state = {
  hasreceiveddata: false,
  submittingnew: false,
  states: {}, // this will store per quote id if we're reading, editing or awaiting DB response
  data: {}
}, action) {
  var newstate;
  switch(action.type){
    case RECEIVE_SERVICES_DATA:
      return Object.assign({},state,{
        hasreceiveddata: true,
        data: action.data
      });
    case AWAIT_NEW_SERVICE_RESPONSE:
      return Object.assign({},state,{
        submittingnew: true
      });
    case RECEIVE_NEW_SERVICE_RESPONSE:
      return Object.assign({},state,{
        submittingnew: false
      });
    case START_SERVICE_EDIT:
      newstate = _.cloneDeep(state);
      newstate.states[action.qid] = EDITING_SERVICE;
      return newstate;
    case FINISH_SERVICE_EDIT:
      newstate = _.cloneDeep(state);
      delete newstate.states[action.qid];
      return newstate;
    case SUBMIT_SERVICE_EDIT:
      newstate = _.cloneDeep(state);
      newstate.states[action.qid] = SUBMITTING_SERVICE;
      return newstate;
    default: return state;
  }
}

export default service;
