import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
describe('APP', () => {
    test("Tegner app-en", () => {
        render(<App />);
        expect(screen.getByText("AAP App")).toBeVisible();
    });
});
