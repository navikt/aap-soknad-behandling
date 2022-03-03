import {BodyShort, Panel} from "@navikt/ds-react";
import React from "react";
import {LinkCardTableRowType, LinkCardTableRow} from "./LinkCardTableRow";

import * as styles from "./LinkCardTable.module.css"

type LinkCardTableProps = {
  headingLabels?: string[];
  children: React.ReactNode;
  Row?: LinkCardTableRowType;
}

const LinkCardTable = ({children, headingLabels}: LinkCardTableProps) => {
  return (
    <>
      {headingLabels && <Panel className={styles.link_card_table_row}>{headingLabels.map((label: string) => <BodyShort key={label}>{label}</BodyShort>)}</Panel>}
      <div role="list" className={styles.link_card_table_list}>
        {children}
      </div>
    </>);
}

LinkCardTable.Row = LinkCardTableRow;

export default LinkCardTable;
