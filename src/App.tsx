import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { Heading } from "@navikt/ds-react";

import Saksoversikt from "./pages/Saksoversikt/Saksoversikt";
import { Feilviser } from "./components/Feilviser/Feilviser";
import { AppHeader } from "./components/Header/AppHeader";
import { SakHenter } from "./components/SakHenter/SakHenter";

const Ruter = (): JSX.Element => (
  <Routes>
    <Route path={"/aap-behandling"}>
      <Route
        path="saksoversikt"
        element={
          <ErrorBoundary FallbackComponent={Feilviser}>
            <Saksoversikt />
          </ErrorBoundary>
        }
      />
      <Route path="sak/:personid" element={<SakHenter />} />
      <Route path={""} element={<Navigate to="saksoversikt" />} />
    </Route>
    <Route path={""} element={<Navigate to="/aap-behandling/saksoversikt" />} />
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
);

const App = () => {
  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={Feilviser}>
        <AppHeader />
        <main id="main-content" className="main__content">
          <BrowserRouter>
            <Ruter />
          </BrowserRouter>
        </main>
      </ErrorBoundary>
    </StrictMode>
  );
};

export { App, Ruter };
