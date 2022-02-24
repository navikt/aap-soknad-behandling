import React from "react";
import {render } from "react-dom";
import { App } from "./App";
import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import "./index.css";
import "./globals.css";

if (process.env.USE_MOCK) {
  const { worker } = require('./mocks/browser')
  worker.start()
}

const app = document.getElementById("app");
render(<div className="app-container">
  <App />
</div>, app);
