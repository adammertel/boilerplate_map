import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import {
  Map,
  LayerGroup,
  TileLayer,
  WMSTileLayer,
  GeoJSON,
  ScaleControl,
  AttributionControl
} from 'react-leaflet';
require('leaflet.measure');

@observer
export default class AppMap extends React.Component {
  constructor(props) {
    super(props);
  }

  style() {
    return {
      position: 'absolute',
      left: 500,
      right: 0,
      bottom: 0,
      top: 0
    };
  }

  mapStyle() {
    return {
      width: '100%',
      height: '100%'
    };
  }

  componentDidMount() {
    window['map'] = this.refs.map.leafletElement;
    const measureCircleStyle = {
      fillColor: 'black',
      weight: 0,
      fillOpacity: 1,
      radius: 3
    };
    window['measureControl'] = L.control
      .polylineMeasure({
        measureControlTitleOn: 'Measure',
        measureControlTitleOff: 'Stop measuring',
        clearControlTitle: 'Clear Measurements',
        clearControlLabel: '&times',
        measureControlLabel: '&#128207;',
        tempLine: {
          color: 'black', // Dashed line color
          weight: 2 // Dashed line weight
        },
        fixedLine: {
          color: 'black', // Solid line color
          weight: 2 // Solid line weight
        },
        startCircle: measureCircleStyle,
        intermedCircle: measureCircleStyle,
        currentCircle: measureCircleStyle,
        endCircle: measureCircleStyle
      })
      .addTo(map);
  }

  isMeasuring() {
    return window['measureControl']._measuring;
  }

  renderBaseLayer(top) {
    const basemap = top ? store.baseLayerTop : store.baseLayerBottom;
    const opacity = top ? 1 - store.baseLayerOpacity : store.baseLayerOpacity;

    if (basemap.type === 'tile') {
      return <TileLayer key={top ? '1' : '2'} opacity={opacity} {...basemap} />;
    } else if (basemap.type === 'wms') {
      return (
        <WMSTileLayer key={top ? '1' : '2'} opacity={opacity} {...basemap} />
      );
    }
  }

  renderBaseLayers() {
    return (
      <LayerGroup>
        {this.renderBaseLayer(false)}
        {this.renderBaseLayer(true)}
      </LayerGroup>
    );
  }

  render() {
    return (
      <div className="map-wrapped" style={this.style()}>
        <Map
          onViewportChanged={store.mapMoved}
          useFlyTo={true}
          ref="map"
          style={this.mapStyle()}
          attributionControl={false}
          bounds={store.mapExtent}
        >
          <ScaleControl position="topleft" imperial={false} />
          <AttributionControl position="bottomleft" />

          {this.renderBaseLayers()}
        </Map>
      </div>
    );
  }
}
