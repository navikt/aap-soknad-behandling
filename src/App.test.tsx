import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
describe('my tests', () => {
    test("helloworld", () => {
        render(<App />);
        const linkElement = screen.getByText(/Hello world!/i);
        expect(true).toBe(true);
    });
});
