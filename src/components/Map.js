import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Text, Icon, Menu, Item } from "react-semantify";
import { Link } from "react-router";
import {japanMap } from './map/jquery.japan-map';
import ReactDOM  from 'react-dom';


//var uid = localStorage.getItem(UidRef);

class Map extends React.Component {
  renderMap(mapWidth, mapHeigth){
    var areas = [
        {code : 1, name: "Hokkaido", color: "#7f7eda", hoverColor: "#b3b2ee", prefectures: [1], description:'alguna'},
        {code : 2, name: "Tohoku",   color: "#759ef4", hoverColor: "#98b9ff", prefectures: [2,3,4,5,6,7], description:'otra'},
        {code : 3, name: "Kanto",   color: "#7ecfea", hoverColor: "#b7e5f4", prefectures: [8,9,10,11,12,13,14], description:'3'},
        {code : 4, name: "Chubu",   color: "#7cdc92", hoverColor: "#aceebb", prefectures: [15,16,17,18,19,20,21,22,23], description:'4'},
        {code : 5, name: "Kinki",   color: "#ffe966", hoverColor: "#fff19c", prefectures: [24,25,26,27,28,29,30], description:'5'},
        {code : 6, name: "Chugoku",   color: "#ffcc66", hoverColor: "#ffe0a3", prefectures: [31,32,33,34,35], description:'6'},
        {code : 7, name: "Shikoku",   color: "#fb9466", hoverColor: "#ffbb9c", prefectures: [36,37,38,39], description:'7'},
        {code : 8, name: "Kyushu",   color: "#ff9999", hoverColor: "#ffbdbd", prefectures: [40,41,42,43,44,45,46], description:'8'},
        {code : 9, name: "Okinawa",   color: "#eb98ff", hoverColor: "#f5c9ff", prefectures: [47], description:'9'}
    ];
    $(ReactDOM.findDOMNode(this)).japanMap({
        //element: ReactDOM.findDOMNode(this),
        width: mapWidth,
        //height: mapHeigth,
        selection: "area",
        areas: areas,
        backgroundColor : "#f2fcff",
        //borderLineColor: "#f2fcff",
        borderLineWidth : 0,
        lineColor : "#a0a0a0",
        lineWidth: 0,
        drawsBoxLine: true,
        prefectureNameType: "short",
        movesIslands : true,
        fontSize : 11,
        onSelect : function(data){
           $('.ui.small.modal').modal('show');
           $('#headerModal').html(data.name);
           $('#contentModal').html(data.area.description);
        }
    });
  }
  currentScreenWidth(){
    return window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
  }
  deleteCanvasDom(){
    let element = document.getElementsByTagName("canvas");
    for (let index = element.length - 1; index >= 0; index--) {
      element[index].parentNode.removeChild(element[index]);
    }
  }
  componentDidMount(){
    const initialScreenWidth = this.currentScreenWidth();
    console.log('ini'+initialScreenWidth);
    const containerWidth = (initialScreenWidth < 800) ? (initialScreenWidth-50) : (initialScreenWidth < 1000) ? 800:1000;
    this.renderMap(containerWidth,0);

    window.addEventListener('resize', () => {
      const currentScreenWidth = this.currentScreenWidth();
      if (currentScreenWidth > 1000) {
        this.deleteCanvasDom();
        this.renderMap(1000,0);
      }
      else if (currentScreenWidth >= 800 && currentScreenWidth<=1000) {
        this.deleteCanvasDom();
        this.renderMap(800,0);
      }else if(currentScreenWidth<800){
        this.deleteCanvasDom();
        this.renderMap(currentScreenWidth - 50,0);
      }
    });
  }
  componentWillUnmount(){
    this.deleteCanvasDom();
  }
  render() {
    const { router } = this.context;
    return (
      <div className='ui grid centered container'>
      <div className='column'>
        <div id="map_container" ></div>
        </div>
        <div className="ui small modal">
          <div className="header" id="headerModal">Header</div>
          <div className="content" id="contentModal">
            <p>contenido</p>
          </div>
          <div className="actions">
            <div className="ui cancel button">Cancel</div>
          </div>
        </div>
      </div>      
    );
  }
}

Map.contextTypes = {
  router: PropTypes.any
};

var mapStateProps = function(state) {
  const { auth, user } = state;

  return  {
    auth,user
  };
};

export default connect(mapStateProps)(Map);
