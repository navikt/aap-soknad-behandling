import React from "react";
import { App } from "./App";
import { createRoot } from "react-dom/client";
import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import "./index.css";
import "./globals.css";
import { Modal } from "@navikt/ds-react";
import { Brukertype, handlers } from "./mocks/handlers";
import { DevTools } from "./components/DevTools";
import { isTrue } from "./lib/stringUtils";

if (process.env.USE_MOCK) {
  const { worker } = require("./mocks/browser");
  const brukertype = localStorage.getItem("brukertype"); //NAV, NAY, Kontaktsenter
  const erGodkjenner = localStorage.getItem("erGodkjenner");
  if (brukertype === "NAV") {
    worker.use(...handlers(Brukertype.NAV, isTrue(erGodkjenner)));
  } else if (brukertype === "NAY") {
    worker.use(...handlers(Brukertype.NAY, isTrue(erGodkjenner)));
  } else {
    worker.use(...handlers(Brukertype.NKS, isTrue(erGodkjenner)));
  }
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
    {process.env.USE_MOCK && <DevTools />}
  </div>
);
