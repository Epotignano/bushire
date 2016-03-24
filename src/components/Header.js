/**
 * Created by epotignano on 19/02/16.
 */

import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Text, Icon, Menu, Item } from "react-semantify";
import { Link } from "react-router";
import UserAvatar  from './userAvatar';
import Firebase from 'firebase';
import { FireRef, UidRef } from '../constants/Commons';

var uid = localStorage.getItem(UidRef);
function generateRightMenu(isAuthenticated, router) {
  if(isAuthenticated) {
    return(
    <a className="ui dropdown item"><UserAvatar className="item"/>
      <i className="dropdown icon"></i>
      <div className="menu">
        <div className="item">マイページ</div>
        <div className="item" onClick={ router.push('app/' + uid + '/audition/creation')}>New audition</div>
        <div className="ui divider"></div>
        <div className="item">ログアウト</div>
      </div>
    </a>
    )
  }

  return(
      <Link className="item" to="/access/login">ログイン</Link>
  )
}

class Header extends React.Component {
  componentDidMount() {
    $('.ui.dropdown.item').dropdown();
  }

  componentDidUpdate() {
    $('.ui.dropdown.item').dropdown('refresh')
  }
  render() {
    const instance = new Firebase(FireRef);
    const { router } = this.context;

    return (
      <header>   
        <div className="ui two column centered stackable grid inverted menu navbar pink">
          <div className="column">
            hghfhhf
          </div>
          <div className="hsearch ui column centered aligned category search "> 
            <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Search..."/>
                <i className="search icon"></i>
            </div>
            <div className="results"></div>    
          </div>
        </div>
      </header> 


     /* <header className="ui navbar page ">     
       
          <div className="ui grid inverted menu navbar pink">

            <div className="ui menu">
                  { generateRightMenu(instance.getAuth(), router) }
            </div>
            <div className='eight wide column'>
              <div className=" ui category search">
                <input className="prompt" type="text" placeholder="Search..." />
                <div className="results"></div>
              </div>
              </div>
              
        </div>        
      </header> */
  /*
      <header className="ui inverted fixed navbar page grid">
        <div className="row">
          <div className="ui inverted fixed menu navbar grid red">
            <div className="right menu">
              { generateRightMenu(instance.getAuth(), router) }
            </div>
            <div className="right search">
                <input class="prompt" type="text" placeholder="Search..." />
              <div className="results"></div>
            </div>
          </div>
        </div>
      </header>*/
    )
  }
}

Header.contextTypes = {
  router: PropTypes.any
};

var mapStateProps = function(state) {
  const { auth, user } = state;

  return  {
    auth,user
  }
};

export default connect(mapStateProps)(Header);
