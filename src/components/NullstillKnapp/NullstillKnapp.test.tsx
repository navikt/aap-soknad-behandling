import { render, screen } from "@testing-library/react";
import { NullstillKnapp } from "./NullstillKnapp";

test("at knappen har korrekt tekst", () => {
  render(<NullstillKnapp onClick={jest.fn()} />);

  const label = screen.getByText("Angre");

  expect(label).toBeInTheDocument();
});
