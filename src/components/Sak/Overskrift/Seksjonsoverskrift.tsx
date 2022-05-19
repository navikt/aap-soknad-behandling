import { getText } from "../../../tekster/tekster";
import * as styles from "./seksjonsoverskrift.module.css";
import { Heading } from "@navikt/ds-react";
import { ReactElement } from "react";

type OverskriftProps = {
  tekstnokkel: string;
  children?: ReactElement;
};

const Seksjonsoverskrift = ({ tekstnokkel, children }: OverskriftProps): JSX.Element => (
  <div className={styles.overskrift}>
    <Heading size={"large"} level={"2"}>
      {getText(tekstnokkel)}
    </Heading>
    {children}
  </div>
);

export { Seksjonsoverskrift };
