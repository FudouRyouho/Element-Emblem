//src\client\index.tsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import MainMenu from "./layout/components/Layout.MainMenu";


import "./styles/test.scss";
import "./styles/tailwindcss/output.css"

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
