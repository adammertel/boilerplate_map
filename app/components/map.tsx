import * as React from "react";
import * as L from "leaflet";

import {
  Map,
  Marker,
  Popup,
  TileLayer,
  LayersControl,
  LayerGroup
} from "react-leaflet";

export default class MapComponent extends React.Component {
  mapRef;
  mapEl;
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.mapEl = false;
  }

  componentDidMount() {
    this.mapEl = this.mapRef.current.leafletElement;
    setTimeout(() => {
      this.mapEl.invalidateSize();
    }, 0);
  }

  render() {
    const icon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
      iconSize: [25, 40],
      iconAnchor: [12, 40]
    });

    return (
      <div className="map">
        <Map center={[49, 18]} zoom={10} ref={this.mapRef}>
          <LayersControl position="topright">
            <LayersControl.BaseLayer
              name="OpenStreetMap.BlackAndWhite"
              checked={true}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
          </LayersControl>
          <LayerGroup>
            <Marker position={[48.93, 18.15]} icon={icon} />
          </LayerGroup>
        </Map>
      </div>
    );
  }
}
