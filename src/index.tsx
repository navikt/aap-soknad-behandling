import React from "react";
import { App } from "./App";
import { createRoot } from "react-dom/client";
import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import "./index.css";
import "./globals.css";

if (process.env.USE_MOCK) {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const container = document.getElementById("app");
const root = createRoot(container as NonNullable<HTMLElement>);
root.render(
  <div className={"app-container"}>
    <App />
  </div>
);
