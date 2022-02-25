import React, { useState } from "react";

import { VilkårsvurderingType } from "../../types/SakType";
import { Success, Error, DecisionCheck, DecisionCross } from "@navikt/ds-icons";

import "./vilkårsvurdering.css";
import { Accordion, Alert, Button, Loader } from "@navikt/ds-react";
import { vilkårstilstand, VILKÅRSTILSTAND } from "../../types/Vilkårstilstand";
import { getText } from "../../tekster/tekster";
import { fetchPOST } from "../../hooks/useFetch";

const Vilkår = ({ vk, personident }: { vk: VilkårsvurderingType; personident: string }): JSX.Element => {
  const [senderMelding, setSenderMelding] = useState<boolean>(false);
  const [innsendingFeil, setInnsendingFeil] = useState<string | undefined>(undefined);
  const [meldingSendt, setMeldingSendt] = useState<boolean>(false);
  const sendMelding = async () => {
    setSenderMelding(true);
    const res = await fetchPOST("/aap-behandling/api/manueltVedtak", {
      personident,
      value: {
        losning_11_5_manuell: {
          grad: 60,
        },
      },
    });
    if (!res.ok) {
      setSenderMelding(false);
      setInnsendingFeil(res.error);
    }
    if (res.ok) {
      setMeldingSendt(true);
      setSenderMelding(false);
      if (innsendingFeil) {
        setInnsendingFeil(undefined);
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
          {vk.harÅpenOppgave && (
            <div>
              <Button
                variant={"secondary"}
                type={"button"}
                onClick={sendMelding}
                disabled={senderMelding || meldingSendt}
              >
                {senderMelding && <Loader />}
                <DecisionCheck /> Vilkåret er oppfylt
              </Button>
              <Button
                variant={"secondary"}
                type={"button"}
                onClick={sendMelding}
                disabled={senderMelding || meldingSendt}
              >
                {senderMelding && <Loader />}
                <DecisionCross /> Vilkåret er ikke oppfylt
              </Button>
              {innsendingFeil && <Alert variant={"error"}>Innsending feilet {innsendingFeil}</Alert>}
              {meldingSendt && <Alert variant={"success"}>Meldingen ble sendt inn</Alert>}
            </div>
          )}
        </main>
      </Accordion.Content>
    </Accordion.Item>
  );
};

const Vilkårsvurderinger = ({
  vilkår,
  personident,
}: {
  vilkår: VilkårsvurderingType[];
  personident: string;
}): JSX.Element => {
  if (!vilkår || vilkår.length === 0) {
    return <div>Ingen vilkår</div>;
  }
  return (
    <Accordion>
      {vilkår.map((vk) => (
        <Vilkår vk={vk} personident={personident} key={vk.paragraf + vk.ledd} />
      ))}
    </Accordion>
  );
};

export { Vilkårsvurderinger };
