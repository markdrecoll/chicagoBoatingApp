import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.87,
      lng: -87.62
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="col-12 col-lg-10" style={{height: "500px"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBXqijcOrdKWgN_LKVMViIic6_tLpzrM2A'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.87}
            lng={-87.62}
            text="Chicago"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;