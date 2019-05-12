import * as React from "react";

type Props = {};

export default class PanelComponent extends React.Component<Props> {
  props;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel" data-testid="panel-wrapper">
        <button className="muni-button text-white font-bold py-2 px-4 rounded">
          test 4
        </button>
      </div>
    );
  }
}
