import React from "react";
import { App } from "./App";
import { createRoot } from "react-dom/client";
import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import "./index.css";
import "./globals.css";
import { Modal } from "@navikt/ds-react";

if (process.env.USE_MOCK) {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const container = document.getElementById("app");
if (Modal.setAppElement) {
  Modal.setAppElement(container);
}
const root = createRoot(container as NonNullable<HTMLElement>);
root.render(
  <div className={"app-container"}>
    <App />
  </div>
);
