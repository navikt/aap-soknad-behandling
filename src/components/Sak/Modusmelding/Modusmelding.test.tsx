import { Modusmelding } from "./Modusmelding";
import { render, screen } from "@testing-library/react";

describe("Modusmelding", () => {
  test("viser ingen melding når man er i endringsmodus", () => {
    const { container } = render(<Modusmelding autorisasjon={"ENDRE"} />);
    expect(container.childElementCount).toBe(0);
  });

  test("viser melding om at man er i lese-modus", () => {
    render(<Modusmelding autorisasjon={"LESE"} />);
    expect(screen.getByText(/Du er i lesemodus/)).toBeVisible();
  });

  test("viser melding om at man er i kvalitetssikringsmodus", () => {
    render(<Modusmelding autorisasjon={"GODKJENNE"} />);
    expect(screen.getByText(/Du er i kvalitetssikringsmodus/)).toBeVisible();
  });
});
