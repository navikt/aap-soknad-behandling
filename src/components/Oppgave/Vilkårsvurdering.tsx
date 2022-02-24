import { useState } from "react";

import { VilkårsvurderingType } from "../../types/SakType";
import { Success, Error, DecisionCheck, DecisionCross } from "@navikt/ds-icons";

import "./vilkårsvurdering.css";
import { Accordion, Alert, Button, Loader } from "@navikt/ds-react";
import { vilkårstilstand, VILKÅRSTILSTAND } from "../../types/Vilkårstilstand";
import { getText } from "../../tekster/tekster";
import { fetchPOST } from "../../hooks/useFetch";

const Vilkår = ({ vk }: { vk: VilkårsvurderingType }): JSX.Element => {
  const [senderMelding, setSenderMelding] = useState<boolean>(false);
  const [innsendingFeil, setInnsendingFeil] = useState<string|undefined>(undefined);
  const sendMelding = async () => {
    setSenderMelding(true);
    const res = await fetchPOST("/aap-behandling/api/sak/vurderVilkaar", {});
    if (!res.ok) {
      setSenderMelding(false);
      setInnsendingFeil(res.error);
    }
    if (res.ok) {
      if (innsendingFeil) {
        setInnsendingFeil(undefined);
        setSenderMelding(false);
      }
    }
  };

  return (
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
          <Button variant={"secondary"} type={"button"} onClick={sendMelding} disabled={senderMelding}>
            {senderMelding && <Loader />}
            <DecisionCheck /> Vilkåret er oppfylt
          </Button>
          <Button variant={"secondary"} type={"button"} onClick={sendMelding} disabled={senderMelding}>
            {senderMelding && <Loader />}
            <DecisionCross /> Vilkåret er ikke oppfylt
          </Button>
          {innsendingFeil && <Alert variant={"error"}>Innsending feilet {innsendingFeil}</Alert>}
        </main>
      </Accordion.Content>
    </Accordion.Item>
  );
};

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
