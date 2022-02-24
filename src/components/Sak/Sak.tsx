import React from "react";
import { Heading, LinkPanel } from "@navikt/ds-react";
import {Calculator, HandsHeart, Law, Receipt} from "@navikt/ds-icons";

import { SakType } from "../../types/SakType";
import { Vilkårsvurderinger } from "../Oppgave/Vilkårsvurdering";
import { Sammendrag } from "../Sammendrag/Sammendrag";

import "./sak.css";

const Sak = ({ sak }: { sak: SakType }): JSX.Element => {
  return (
    <div className="sak__container">
      <div className="sak__header">
        <Heading level={"1"} size={"xlarge"}>
          Søknad om AAP
        </Heading>
      </div>
      <Sammendrag sak={sak} />
      <section className={"sak"}>
        <aside className={"sak__navigasjon"}>
          <nav>
            <LinkPanel><HandsHeart />Inngangsvilkår</LinkPanel>
            <LinkPanel><Law />11-5</LinkPanel>
            <LinkPanel><Law />11-6</LinkPanel>
            <LinkPanel><Calculator /> Beregning</LinkPanel>
            <LinkPanel><Receipt /> Resultat</LinkPanel>
          </nav>
        </aside>
        <main className={"sak__behandling"}>
          <Vilkårsvurderinger vilkår={sak.vilkårsvurderinger} />
        </main>
      </section>
    </div>
  );
};

export { Sak };
