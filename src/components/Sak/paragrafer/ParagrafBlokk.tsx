import { VilkårsvurderingType, VilkårsvurderingUtenAutorisasjonType } from "../../../types/SakType";
import { useState } from "react";
import { Accordion, Heading } from "@navikt/ds-react";

type ParagrafBlokkProps = {
  children: JSX.Element | JSX.Element[];
  vilkårsvurdering: VilkårsvurderingType | VilkårsvurderingUtenAutorisasjonType;
  heading: string;
};

export const ParagrafBlokk = ({ vilkårsvurdering, children, heading }: ParagrafBlokkProps) => {
  const [visParagraf, toggleVisParagraf] = useState<boolean>(vilkårsvurdering.utfall.valueOf() === "IKKE_VURDERT");

  return (
    <Accordion>
      <Accordion.Item open={visParagraf}>
        <Accordion.Header
          onClick={(event) => {
            event.preventDefault();
            toggleVisParagraf(!visParagraf);
          }}
        >
          <Heading level={"3"} size={"medium"}>
            {heading}
          </Heading>
        </Accordion.Header>
        <Accordion.Content>{children}</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};
