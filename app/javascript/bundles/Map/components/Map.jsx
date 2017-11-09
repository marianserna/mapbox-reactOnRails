import PropTypes from 'prop-types';
import React from 'react';
import ReactMapGL from 'react-map-gl';

export default class Map extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 10
      }
    };
  }

  render() {
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken="pk.eyJ1IjoibWFyaWFuc2VybmEiLCJhIjoiY2o5c2pnZWtqMHIxcTJxcXF5M2QwMnk4YiJ9.ZqdTsqD_v8BX1tR8dGQxBA"
          mapStyle="mapbox://styles/marianserna/cj9niotu73i7t2rs1mt2t14sy"
          onViewportChange={viewport => {
            this.setState({ viewport });
          }}
        />
      </div>
    );
  }
}
