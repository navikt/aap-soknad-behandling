import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { Heading } from "@navikt/ds-react";

import Saksoversikt from "./pages/Saksoversikt/Saksoversikt";
import { Feilviser } from "./components/Feilviser/Feilviser";
import { AppHeader } from "./components/Header/AppHeader";
import {SakHenter} from "./components/SakHenter/SakHenter";

export function App() {
  return (
    <ErrorBoundary FallbackComponent={Feilviser}>
      <AppHeader />
      <main id="main-content" className="main__content">
        <BrowserRouter>
          <Routes>
            <Route
              path="/aap-behandling/saksoversikt"
              element={<ErrorBoundary FallbackComponent={Feilviser}><Saksoversikt /></ErrorBoundary>}
            />
            <Route path="/aap-behandling/sak/neste" element={<SakHenter />} />
            <Route path="/aap-behandling/sak/:personid" element={<SakHenter />} />
            <Route
              path="*"
              element={
                <>
                  <Heading size={"xlarge"} level={"1"} spacing={true}>
                    AAP App
                  </Heading>
                  <span>Not Found</span>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </main>
    </ErrorBoundary>
  );
}
