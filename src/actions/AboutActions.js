import { FireRef, UidRef } from '../constants/Commons';
import Firebase from 'firebase';
import { ABOUT_SAVE, ABOUT_READ } from "../constants/ActionTypes";

export function saveContent(content) {
  return dispatch => {
    let _modifiedContent = "about";
    let _content = new Firebase(FireRef +  _modifiedContent );

    let _contentData = {
      text: content
    };

    _content.set(_contentData, (error)=> {
      if(error) {
        return Promise.reject(_contentData);
      }
      else {
        // Dispatch the success action
        dispatch(RegisterSuccess("Success", content));
      }
    });
  };
}

function RegisterSuccess(contentData, data) {
  return {
    type: ABOUT_SAVE,
    message:contentData,
    output: data
  };
}

export function getAbout() {
  return dispatch => {
    let aboutRef = new Firebase(FireRef + "about/").child("text");
    aboutRef.on("value",function(snapshot){
        console.log("AboutUS:" + snapshot);
        dispatch({ type: ABOUT_READ, output: snapshot.val() });
      });
  };
}