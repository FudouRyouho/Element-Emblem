//src\client\index.tsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import "./styles/index.scss";
import "./styles/details.scss";
//import "./styles/test.scss";
import "./styles/btn.scss";
import Inventory from "../client/inventory/components/Inventory";
import MainMenu from "./layout/components/Layout.MainMenu";

const App: React.FC = () => {
  return (
    <>
      <MainMenu />
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
