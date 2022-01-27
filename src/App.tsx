import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Heading } from "@navikt/ds-react";
import Saksoversikt from "./pages/Saksoversikt/Saksoversikt";

export function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/aap-behandling/saksoversikt" element={<Saksoversikt />} />
          <Route
            path="*"
            element={
              <>
                <Heading size={"2xlarge"} level={"1"} spacing={true}>
                  AAP App
                </Heading>
                <span>Not Found</span>
              </>
                    }
                />
        </Routes>
      </BrowserRouter>
        );
}
