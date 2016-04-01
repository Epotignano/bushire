import React, { Component, PropTypes} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { saveContent } from "../../actions/AboutActions";
import ProseMirror from 'react-prosemirror';
import 'prosemirror/dist/inputrules/autoinput';
import 'prosemirror/dist/menu/menubar';
import 'prosemirror/dist/menu/tooltipmenu';
import 'prosemirror/dist/menu/menu';
import Firebase from 'firebase';

class About extends Component {
   render() {
    const { dispatch, output, options, message, isAuthenticated } = this.props;
    const {store, router, route} = this.context;
    console.log("esta logueado:" + isAuthenticated);
    if(!isAuthenticated){
      router.push('/access/login');
    }
    return(
      <div className="ui one column centered grid">
        <form  onSubmit={e => {
          e.preventDefault();
          const about = this.refs.pm.getContent('html');
          //const content = {about} ;
          dispatch(saveContent(about));
          }
        }
        className="column six wide form-holder">
          <h2 className="header form-head">About US{this.props.isAuthenticated}</h2>
          <div className="ui form">
            <div className="field">
              <ProseMirror value={output} options={options} ref="pm"/>
            </div>
            <div>{message}</div>
            <div className="field">
              <input type="submit" value="登録" className="ui button large fluid green"/>
            </div>
          </div>
        </form>
      </div>
       )
   }
}

function mapStateProps(state) {
    const { about, auth } = state;
    const { output, options, message } = about;
    const { isAuthenticated } = auth;

    return {
      output, options, message, isAuthenticated
    }
}

About.contextTypes = {
  router: React.PropTypes.any,
  store: React.PropTypes.any,
  route: React.PropTypes.any
};

About = connect(mapStateProps)(About);


export default About;