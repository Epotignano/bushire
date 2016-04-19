
function days(state = {
  size:1,
  data:[1]
}, action) {
  switch (action.type) {
    case "ADD_DAYS":
     return Object.assign({},state,{
        size: action.size,
        data: action.data
      });
    default:
      return state;
  }
}

export default days;
