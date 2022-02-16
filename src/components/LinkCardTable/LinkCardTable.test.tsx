import React from "react";
import { render, screen } from "@testing-library/react";
import {LinkCardTable} from "./index";
describe('LinkCardTable', () => {
  test("render", () => {
    const rows = ["one", "two", "three"];
    render(<LinkCardTable headingLabels={rows}>
      {rows.map((row: string) => <LinkCardTable.Row key={row} href={row}>{row}</LinkCardTable.Row>)}
    </LinkCardTable> );
    expect(screen.getAllByRole("link")).toHaveLength(3);
  });
  test("href", () => {
    render(<LinkCardTable headingLabels={["One"]}>
      <LinkCardTable.Row href="#one">One</LinkCardTable.Row>
    </LinkCardTable> );
    expect(
      screen
        .getByRole("link")
        .getAttribute("href")
    ).toBe("#one")
  });
});
