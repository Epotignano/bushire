/**
 * Created by epotignano on 25/02/16.
 */

import React, {Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { loginUser, resetPassword } from "../actions/AuthActions";
import Formsy from 'formsy-react';
import { FormsyText }  from 'formsy-material-ui';

class Login extends Component {

  showModal() {
    $('.ui.modal.editform').modal({
        onApprove:()=>{
          console.log("esto");
        }
      })
      .modal({
        blurring:true
      })
      .modal('setting', 'transition', 'fade up')
      .modal('show');
    //console.log(this.refs.mailRecovery);
    $('.ui.green.positive.button').click(this.sendRecoveryMail.bind(this));  
  }

  renderModalDetachable(){
    $('.ui.modal.editform').modal({detachable: false}); 
  }

  render(){
    const {dispatch, auth} = this.props;
    const {store, router, route}  = this.context;
    this.renderModalDetachable();
    return(
      <div className="ui one column center aligned grid">
        <form  onSubmit={e => {
          e.preventDefault();
          const username = this.refs.username.value.trim();
          const password = this.refs.password.value.trim();
          const credentials = {password, username};
          dispatch(loginUser(credentials));
          store.subscribe(function(){
            var _state = store.getState();
            if(_state.auth.isAuthenticated) {
              router.push('/access/about');
            }
          })
        }}
        className="column six wide form-holder">
          <h2 className="center aligned header form-head">Bushire　ログイン</h2>
          <div className="ui form">
            <div className="field">
              <input ref="username" type="text" placeholder="ユーサー名"/>
            </div>
            <div className="field">
              <input ref="password" type="password" placeholder="パスワード"/>
            </div>
            <div className="field">
              <input type="submit" value="ログイン" className="ui button large fluid green"/>
            </div>
            <div className="inline field">
              <div className="ui checkbox">
                <input type="checkbox"/>
                  <label>Remember me</label>
              </div>
            </div>
            {
              auth.errorMessage == 'LOGIN_FAILURE' && <span>User or password incorrect</span>
            }
          </div>
        </form>
        <div className="ui column">
          <button className="ui button" onClick={this.showModal.bind(this)}> Forgot password? </button>
        </div>
        <div className="ui small modal editform">
          <div className="header">Recover password</div>
          <div className="content">
            <div className="description">
              <p>Introduce your email for recover your password</p>
            </div>
            <div className="description">
              <form className="ui form">
                    <div className="row ui">
                      <div className="one column ui section">
                        <div className="field">
                          <input ref="email" type="text" placeholder="writes your email"/>
                        </div>
                      </div>
                    </div>
                </form>
            </div>
          </div>
          <div className="actions">
            <div className="two fluid ui buttons">
              <button className="ui red deny button">
                Cancel
              </button>
              <button className="ui green positive button">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  sendRecoveryMail() {
    const {dispatch} = this.props;
    dispatch(resetPassword(this.refs.email.value.trim()));
  }
}

Login.contextTypes = {
  router: React.PropTypes.any,
  store: React.PropTypes.any,
  route: React.PropTypes.any
};

function mapStateProps(state) {
  const { auth } = state;
  const {isAuthenticated, errorMessage, isAttempPasswordReset} = auth;

  return {
    auth
  }
}

Login = connect(mapStateProps)(Login);

export default Login;


