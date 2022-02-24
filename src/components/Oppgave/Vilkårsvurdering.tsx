import React from "react";

import { VilkårsvurderingType } from "../../types/SakType";
import { Success, Error, DecisionCheck, DecisionCross } from "@navikt/ds-icons";

import "./vilkårsvurdering.css";
import { Accordion, Button } from "@navikt/ds-react";
import { vilkårstilstand, VILKÅRSTILSTAND } from "../../types/Vilkårstilstand";
import { getText } from "../../tekster/tekster";

const Vilkår = ({ vk }: { vk: VilkårsvurderingType }): JSX.Element => (
  <Accordion.Item defaultOpen={vk.harÅpenOppgave}>
    <Accordion.Header className={"header__override"}>
      <span>
        {vk.harÅpenOppgave ? <Error className={"nay"} /> : <Success className={"yay"} />}{" "}
        {getText(`paragraf.${vk.paragraf}`)}, {vk.ledd.map((l) => getText(`ledd.${l}`)).join(", ")}
      </span>
    </Accordion.Header>
    <Accordion.Content className={"vilkår__container"}>
      <main className={"vilkår"}>
        <div>Vilkåret er {vilkårstilstand(vk.tilstand as keyof typeof VILKÅRSTILSTAND)}</div>
        <Button variant={"secondary"} type={"button"}><DecisionCheck /> Vilkåret er oppfylt</Button>
        <Button variant={"secondary"} type={"button"}><DecisionCross /> Vilkåret er ikke oppfylt</Button>
      </main>
    </Accordion.Content>
  </Accordion.Item>
);

const Vilkårsvurderinger = ({ vilkår }: { vilkår: VilkårsvurderingType[] }): JSX.Element => {
  if (!vilkår || vilkår.length === 0) {
    return <div>Ingen vilkår</div>;
  }
  return (
    <Accordion>
      {vilkår.map((vk) => (
        <Vilkår vk={vk} key={vk.paragraf + vk.ledd} />
      ))}
    </Accordion>
  );
};

export { Vilkårsvurderinger };
