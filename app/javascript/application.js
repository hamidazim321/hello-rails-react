import "@hotwired/turbo-rails"
import "./controllers"
import App from "./components/App";
import store from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)