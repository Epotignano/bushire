import React, { Component, PropTypes} from "react";
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Router } from 'react-router'
import {
  RECEIVE_SERVICES_DATA,
  AWAIT_NEW_SERVICE_RESPONSE,
  RECEIVE_NEW_SERVICE_RESPONSE,
  START_SERVICE_EDIT,
  FINISH_SERVICE_EDIT,
  SUBMIT_SERVICE_EDIT,
  EDITING_SERVICE,
  SUBMITTING_SERVICE
} from "../../constants/ActionTypes";

class Service extends Component {
	render(){
		var p = this.props,
			q = p.service,
			button;
		if (p.state === EDITING_SERVICE){
			return (<div className="ui form"><form onSubmit={e=>{var p = this.props;
				let title = this.refs.fieldtitle.value;
				let description = this.refs.fielddescription.value;
				let values = {title,description};
				p.submit(values);
				title.value = "";
				description.value = "";
				e.preventDefault();
			}}>
				<input ref="fieldtitle" defaultValue={q.title}/>
				<input ref="fielddescription" defaultValue={q.description}/>
				<button className="tiny ui button"   type="button" onClick={p.cancel}>Cancel</button>
				<button className="tiny ui button"   type="submit" onClick={e=>{var p = this.props;
				let title = this.refs.fieldtitle.value;
				let description = this.refs.fielddescription.value;
				let values = {title,description};
				p.submit(values);
				title.value = "";
				description.value = "";
				e.preventDefault();
				}}>Submit</button>
			</form></div>);
		}
		if (!p.mayedit){
			button = <span>
						<button className="tiny ui button" onClick={p.edit}>Edit</button>
						<button className="tiny ui button" onClick={p.delete}>Delete</button>
					</span>;
		} else if (p.state === SUBMITTING_SERVICE){
			button = <button className="tiny ui button" disabled="disabled">Submitting...</button>;
		} else {
			button = <span>
						<button className="tiny ui button" onClick={p.edit}>Edit</button>
						<button className="tiny ui button" onClick={p.delete}>Delete</button>
					</span>;
		}
		return (
			<div className="ui vertical segment">
				<div className="ui centered grid">
				<div className="row"><div className="column"><p>{q.title}</p></div></div>	
				<div className="row"><div className="column"><p>{q.description}</p></div></div>
				<div className="row"><div className=" column right aligned "><p>{button}</p></div></div>	
					
					
									
			</div>
			</div>
		);
	}
}

Service.contextType = {
    store: PropTypes.any,
    router: PropTypes.any
}

Service = connect()(Service);


export default Service;

