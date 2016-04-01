import React, { Component, PropTypes} from "react";
import { connect } from 'react-redux';
import { Router } from 'react-router';
import Firebase from 'firebase';
import { default as Vehicle } from "../../components/admin/Vehicle";
import { submitNewVehicle,startVehicleEdit,cancelVehicleEdit,submitVehicleEdit,deleteVehicle } from "../../actions/VehicleActions";
import { FireRef } from '../../constants/Commons';
import _ from 'lodash';

class ListVehicle extends Component {
	render(){
		let p = this.props;
		const {store, router, route}  = this.context;
		if(!p.auth.isAuthenticated){
			router.push('/access/login');
		}
		let rows = _.map(p.vehicle.data,function(vehicle,id){
			var serviceestate = p.vehicle.states[id];
			return (
				<Vehicle key={id} vehicle={vehicle} id={id}
				state={serviceestate}
				edit={p.startEdit.bind(this,id)}
				cancel={p.cancelEdit.bind(this,id)}
				submit={p.submitEdit.bind(this,id)}
				delete={p.deleteVehicle.bind(this,id)}
				mayedit={p.auth.uid === vehicle.id}/>);
			}).reverse();

		return (
		<div className="ui grid" style={{"paddingTop":"20px"}} >
			<div className="ui row">
				<div className="column"></div>
				<div className="seven wide column">
					<h2 clasName="header">VEHICLES</h2>
				</div>
			</div>
			<div className="ui right floated seven wide column form">
				<div className="ui grey segment"> 
					<h4 className="ui header grey">Create New</h4>
                <form onSubmit={e => {
                  if(!this.props.vehicle.submitting){
                      e.preventDefault();
                      let model=this.refs.model.value;
                      let price=this.refs.price.value;
                      let values={model,price};
                      this.props.submitNewVehicle(values);
                      this.refs.model.value = '';
                      this.refs.price.value = '';
                    }}
                }>
					<div className="ten field">
						<input ref="model" placeholder="write model of vehicle"/>
					</div>        
					<div className="ten field">
						<input ref="price" placeholder="write price"/>
					</div>
					<div className="ten field">
						<button className="tiny ui button" type="submit" disabled={p.vehicle.submittingnew}>{p.vehicle.submittingnew ? "Publishing..." : "Publish"}</button>
					</div>
				</form>
				</div>
			</div>
			<div className="ui left floated seven wide column">
				<div className="ui grey segment"> 
					<h4 className="ui header grey">Right Now</h4>
					{p.vehicle.hasreceiveddata ? rows : "Loading services..."}
				</div>
			</div>
		</div>
		);
	}
}

function mapStateProps(state) {
	const { vehicle, auth } = state;
	//const { items, text } = vehicle;

	return {vehicle, auth};
}

function mapDispatchToProps(dispatch){
	return {
		submitNewVehicle: function(values){ dispatch(submitNewVehicle(values)); },
		startEdit: function(id){ dispatch(startVehicleEdit(id)); },
		cancelEdit: function(id){ dispatch(cancelVehicleEdit(id)); },
		submitEdit: function(id,title){dispatch(submitVehicleEdit(id,title)); },
		deleteVehicle: function(id){dispatch(deleteVehicle(id)); }
	};
}

ListVehicle.contextTypes = {
	router: React.PropTypes.any,
	store: React.PropTypes.any,
	route: React.PropTypes.any
};

ListVehicle = connect(mapStateProps, mapDispatchToProps)(ListVehicle);


export default ListVehicle;
