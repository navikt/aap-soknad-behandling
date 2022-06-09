import { Markdown } from "./Markdown";
import { render } from "@testing-library/react";

describe("Markdown", () => {
  test("gir formattert innhold tilbake", () => {
    const { container } = render(<Markdown tekst={"Deler av teksten er **bold**"} />);
    expect(container).toContainHTML("<p>Deler av teksten er <strong>bold</strong></p>");
  });
});
