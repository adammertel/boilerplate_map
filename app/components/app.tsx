import * as React from "react";
import MapComponent from "./map";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MapComponent />
        <div className="panel">
          <button className="muni-button text-white font-bold py-2 px-4 rounded">
            test 4
          </button>
        </div>
      </div>
    );
  }
}
