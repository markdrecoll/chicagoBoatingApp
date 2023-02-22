import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const HarborMapMarker = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.87,
      lng: -87.62
    },
    zoom: 11.2
  };

  render() {
    return (

      // Important! Always set the container height explicitly
      <div className="col-12 col-lg-10" style={{ height: "500px" }}>
        {console.log(this.props)}
        <GoogleMapReact
          // google docs say exposure of this key is safe
          bootstrapURLKeys={{ key: 'AIzaSyBXqijcOrdKWgN_LKVMViIic6_tLpzrM2A' }}
          defaultCenter={this.props.center2}
          defaultZoom={this.props.zoom}
        >
          <HarborMapMarker
            lat={41.944}
            lng={-87.638}
            text="Belmont"
          />
          <HarborMapMarker
            lat={41.960}
            lng={-87.642}
            text="Montrose"
          />
          <HarborMapMarker
            lat={41.9284}
            lng={-87.6342}
            text="Diversey"
          />
          <HarborMapMarker
            lat={41.8368}
            lng={-87.6065}
            text="31st"
          />
          <HarborMapMarker
            lat={41.8857}
            lng={-87.6117}
            text="DuSable"
          />
          <HarborMapMarker
            lat={41.8769}
            lng={-87.6132}
            text="Monroe"
          />
          <HarborMapMarker
            lat={41.8604}
            lng={-87.6124}
            text="Burnham"
          />
          <HarborMapMarker
            lat={41.7884}
            lng={-87.5790}
            text="59th"
          />
          <HarborMapMarker
            lat={41.7772}
            lng={-87.5742}
            text="Jackson"
          />
          <HarborMapMarker
            lat={42.0778}
            lng={-87.6790}
            text="Wilmette"
          />
          <HarborMapMarker
            lat={42.3589}
            lng={-87.8243}
            text="Waukegan"
          />
          <HarborMapMarker
            lat={42.6723}
            lng={-87.8058}
            text="Kenosha"
          />
          <HarborMapMarker
            lat={43.04510}
            lng={-87.8802}
            text=""
          />
          <HarborMapMarker
            lat={41.7280}
            lng={-86.9129}
            text="Michigan City"
          />
          <HarborMapMarker
            lat={41.7981}
            lng={-86.7447}
            text="New Buffalo"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;