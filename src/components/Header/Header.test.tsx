import React from "react";
import {render, screen} from "@testing-library/react";
import {AppHeader} from "./AppHeader";

describe("Header", () => {
  test("tegner header", () => {
    render(<AppHeader />);
    expect(screen.getByText('AAP Vedtaksløsning')).toBeVisible();
  })
})
