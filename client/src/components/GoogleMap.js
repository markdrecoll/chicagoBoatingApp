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

// lat: 41.75,
// lng: -88.15
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="col-12 col-lg-10" style={{height: "500px"}}>
        <GoogleMapReact
        // google docs say exposure of this key is safe
          bootstrapURLKeys={{ key: 'AIzaSyBXqijcOrdKWgN_LKVMViIic6_tLpzrM2A'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.944}
            lng={-87.638}
            text="Belmont"
          />

        <AnyReactComponent
            lat={41.960}
            lng={-87.642}
            text="Montrose"
          />

        <AnyReactComponent
            lat={41.9284}
            lng={-87.6342}
            text="Diversey"
          />
        <AnyReactComponent
            lat={41.8368}
            lng={-87.6065}
            text="31st"
          />
          <AnyReactComponent
            lat={41.8857}
            lng={-87.6117}
            text="DuSable"
          />
          <AnyReactComponent
            lat={41.8769}
            lng={-87.6132}
            text="Monroe"
          />
          <AnyReactComponent
            lat={41.8604}
            lng={-87.6124}
            text="Burnham"
          />
          <AnyReactComponent
            lat={41.7884}
            lng={-87.5790}
            text="59th"
          />
           <AnyReactComponent
            lat={41.7772}
            lng={-87.5742}
            text="Jackson"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;