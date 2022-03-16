import React from "react";
import {LinkPanel} from "@navikt/ds-react";

import * as styles from "./LinkCardTable.module.css"

export type LinkCardTableRowType = {
  href?: string;
  children: React.ReactNode;
}

export const LinkCardTableRow = ({ href, children }: LinkCardTableRowType) => {
  return (
    <LinkPanel href={href}>
      <div className={styles.link_card_table_row}>
        {children}
      </div>
    </LinkPanel>
  );
};
