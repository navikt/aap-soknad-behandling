import React from "react";
import { Button } from "@navikt/ds-react";
import { Cancel } from "@navikt/ds-icons";

interface Props {
  onClick: Function;
}

export const NullstillKnapp = (props: Props) => {
  const { onClick } = props;

  return (
    <div>
      <Button type={"button"} variant={"tertiary"} onClick={() => onClick()}>
        <Cancel />
        Angre
      </Button>
    </div>
  );
};
