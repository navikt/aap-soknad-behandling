import React, { useState } from "react";

import { VilkårsvurderingType } from "../../../types/SakType";
import { Success, Error, DecisionCheck, DecisionCross } from "@navikt/ds-icons";

import * as styles from "./vilkarsvurdering.module.css";
import { Accordion, Alert, Button, Loader } from "@navikt/ds-react";
import { vilkårstilstand, Vilkarstilstand } from "../../../types/Vilkarstilstand";
import { getText } from "../../../tekster/tekster";
import { fetchPOST } from "../../../hooks/useFetch";

const Vilkår = ({ vk, personident }: { vk: VilkårsvurderingType; personident: string }): JSX.Element => {
  const [senderMelding, setSenderMelding] = useState<boolean>(false);
  const [innsendingFeil, setInnsendingFeil] = useState<string | undefined>(undefined);
  const [meldingSendt, setMeldingSendt] = useState<boolean>(false);
  const sendMelding = async () => {
    setSenderMelding(true);
    const res = await fetchPOST(`/aap-behandling/api/sak/${personident}/losning`, {
      løsning_11_5_manuell: {
        grad: 60,
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
    <Accordion.Item defaultOpen={vk.måVurderesManuelt}>
      <Accordion.Header className={styles.header__override}>
        <span>
          {vk.måVurderesManuelt ? <Error className={styles.nay} /> : <Success className={styles.yay} />}{" "}
          {getText(`paragraf.${vk.paragraf}`)}, {vk.ledd.map((l) => getText(`ledd.${l}`)).join(", ")}
        </span>
      </Accordion.Header>
      <Accordion.Content className={styles.vilkår__container}>
        <main className={styles.vilkår}>
          <div>Vilkåret er {vilkårstilstand(vk.tilstand as keyof typeof Vilkarstilstand)}</div>
          {vk.måVurderesManuelt && (
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
  vilkår?: VilkårsvurderingType[];
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
