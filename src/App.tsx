import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { Heading } from "@navikt/ds-react";

import Saksoversikt from "./pages/Saksoversikt/Saksoversikt";
import { NesteSak } from "./components/NesteSak";
import { Feilviser } from "./components/Feilviser/Feilviser";
import { AppHeader } from "./components/Header/AppHeader";

export function App() {
  return (
    <ErrorBoundary FallbackComponent={Feilviser}>
      <AppHeader />
      <main id="main-content" className="main__content">
        <BrowserRouter>
          <Routes>
            <Route
              path="/aap-behandling/saksoversikt"
              element={<Saksoversikt />}
            />
            <Route path="/aap-behandling/sak/neste" element={<NesteSak />} />
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
