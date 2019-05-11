import * as React from "react";
import MapComponent from "./map";
import { observer } from "mobx-react";

type Props = {
  store: any;
};
@observer
export default class App extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const store = this.props.store;
    return (
      <div>
        <MapComponent
          handleMapMoved={store.mapMoved.bind(store)}
          center={store.center}
          zoom={store.zoom}
        />
        <div className="panel">
          <button className="muni-button text-white font-bold py-2 px-4 rounded">
            test 4
          </button>
        </div>
      </div>
    );
  }
}
