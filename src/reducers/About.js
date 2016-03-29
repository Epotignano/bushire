import { 
    ABOUT_READ,
    ABOUT_SAVE
} from "../constants/ActionTypes";

function about(state = {
  output:"hola",
  options: {
    menuBar: true, 
    tooltipMenu: true, 
    autoInput: true,
    docFormat: 'html'
  }
}, action) {
  switch (action.type) {
    case ABOUT_READ:
      return Object.assign({}, state, {
        output:action.output
      });
    case ABOUT_SAVE:
      return Object.assign({}, state, {
        output:action.output,
        message:action.message
      });
    default:
      return state
  }
}

export default about;
