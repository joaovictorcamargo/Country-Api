import React from "react";
import ReactDOM from "react-dom";
/* import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom' */

/* import makeStore from './redux/store' */

import App from "./App";

/* const store = makeStore();
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
