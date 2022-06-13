import { VilkårsvurderingType } from "../../../types/SakType";
import { useState } from "react";
import { Accordion, Heading } from "@navikt/ds-react";

type ParagrafBlokkProps = {
  children: JSX.Element | JSX.Element[];
  vilkårsvurdering: VilkårsvurderingType;
  heading: string;
};

const ParagrafBlokk = ({ vilkårsvurdering, children, heading }: ParagrafBlokkProps): JSX.Element => {
  const [visParagraf, toggleVisParagraf] = useState<boolean>(!!vilkårsvurdering.måVurderesManuelt);
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
  // return <div className={styles.paragraf__blokk}>{children}</div>;
};
export { ParagrafBlokk };
