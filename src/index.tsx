import React from "react";
import {render } from "react-dom";
import { App } from "./App";
import "@navikt/ds-css";
import "./index.css";

const app = document.getElementById("app");
render(<App />, app);
