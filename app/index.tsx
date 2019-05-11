import "./styles.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app";

ReactDOM.render(
  React.createElement(App, { stores: window["stores"] }),
  document.getElementById("app")
);
