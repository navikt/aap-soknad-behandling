import React from "react";
import {render } from "react-dom";
import { App } from "./App";
import "@navikt/ds-css";
import "./index.css";

if (process.env.USE_MOCK) {
  const { worker } = require('./mocks/browser')
  worker.start()
}

const app = document.getElementById("app");
render(<App />, app);
