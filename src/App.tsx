import { StrictMode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { Heading } from "@navikt/ds-react";

import Saksoversikt from "./pages/Saksoversikt/Saksoversikt";
import { Feilviser } from "./components/Feilviser/Feilviser";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { SakHenter } from "./components/SakHenter/SakHenter";
import { RadioLayoutProvider } from "./contexts/RadioLayout";
import { SkipLinkProvider } from "./contexts/SkipLinkContext";
import { SkipLinks } from "./components/SkipLinks/SkipLinks";

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
        <SkipLinkProvider>
          <SkipLinks />
          <AppHeader />
          <RadioLayoutProvider>
            <main id="main-content" className="main__content">
              <BrowserRouter>
                <Ruter />
              </BrowserRouter>
            </main>
          </RadioLayoutProvider>
        </SkipLinkProvider>
      </ErrorBoundary>
    </StrictMode>
  );
};

export { App, Ruter };
