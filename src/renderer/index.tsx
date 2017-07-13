import * as React from "react";
import { render } from "react-dom";
import Root from "./home";
import { Provider } from "mobx-react";
import AppStore from "./store/AppStore";
import ViewStore from "./store/ViewStore";
import "semantic-ui-less/semantic.less";
import "./global.css";

const state = AppStore.create();
const view = ViewStore.create();

render(
  <Provider view={view} state={state}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
