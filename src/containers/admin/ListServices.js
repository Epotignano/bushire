import React, { Component, PropTypes} from "react";
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import Firebase from 'firebase';
import { default as Service } from "../../components/admin/Service";
import { submitNewService,startServiceEdit,cancelServiceEdit,submitServiceEdit,deleteService } from "../../actions/ServiceActions"
import { FireRef } from '../../constants/Commons';
import _ from 'lodash';

class ListServices extends Component {

  render(){
      var p = this.props, rows = _.map(p.service.data,function(service,sid){
      var serviceestate = p.service.states[sid];
      return (<Service
        key={sid}
        service={service}
        sid={sid}
        state={serviceestate}
        edit={p.startEdit.bind(this,sid)}
        cancel={p.cancelEdit.bind(this,sid)}
        submit={p.submitEdit.bind(this,sid)}
        delete={p.deleteService.bind(this,sid)}
        mayedit={p.auth.uid === service.uid}/>);
    }).reverse();

    return (
      <div className="ui grid" style={{"paddingTop":"20px"}} >
       <div className="ui row"><div className="column"></div><div className=" seven wide column"><h2 clasName="header">SERVICES　サービス</h2></div></div>
        <div className="ui right floated seven wide column form">
        {p.auth.uid ? <p>Log in to add a new service of your own!</p>:           
              <div className="ui grey segment"> 
              <h4 className="ui header grey">Create New</h4>
                <form onSubmit={e => {
                  if(!this.props.service.submitting){
                      e.preventDefault();
                      let title=this.refs.newtitle.value;
                      let description=this.refs.newdescription.value;
                      let values={title,description};
                      this.props.submitNewService(values);
                      this.refs.newtitle.value = '';
                      this.refs.newdescription.value = '';
                    }}
                }>
                  <div className="ten field"><input ref="newtitle" placeholder="write title"/></div>        
                  <div className="ten field"><textarea ref="newdescription" rows="5" placeholder="write description"/></div>
                  <div className="ten field"><button  className="tiny ui button"  type="submit" disabled={p.service.submittingnew}>{p.service.submittingnew ? "Publishing..." : "Publish"}</button></div>
                </form>
              </div>                          
                 
        }
        </div>
        
        <div className="ui left floated seven wide column" >
          <div className="ui grey segment"> 
          <h4 className="ui header grey">Right Now</h4>
            {p.service.hasreceiveddata ? rows : "Loading services..."}        
          </div>
        </div>
        
      </div>
      
    );
  }

}


function mapStateProps(state) {
    const { service, auth } = state
    const { items, text } = service;

    return {
        service, auth
    }
}

function mapDispatchToProps(dispatch){
  return {
    submitNewService: function(values){ dispatch(submitNewService(values)); },
    startEdit: function(sid){ dispatch(startServiceEdit(sid)); },
    cancelEdit: function(sid){ dispatch(cancelServiceEdit(sid)); },
    submitEdit: function(sid,title){dispatch(submitServiceEdit(sid,title)); },
    deleteService: function(sid){dispatch(deleteService(sid)); }
  }
}

ListServices.contextType = {
    store: PropTypes.any,
    router: PropTypes.any
}

ListServices = connect(mapStateProps, mapDispatchToProps)(ListServices);


export default ListServices;
