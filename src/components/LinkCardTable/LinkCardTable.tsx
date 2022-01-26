import {BodyShort, Panel} from "@navikt/ds-react";
import React from "react";
import {LinkCardTableRowType, LinkCardTableRow} from "./LinkCardTableRow";
import "./LinkCardTable.css"

type LinkCardTableProps = {
  headingLabels?: string[];
  children: React.ReactNode;
  Row?: LinkCardTableRowType;
}

const LinkCardTable = ({children, headingLabels}: LinkCardTableProps) => {
  return (
    <>
      {headingLabels && <Panel className="link-card-table-row">{headingLabels.map((label: string) => <BodyShort key={label}>{label}</BodyShort>)}</Panel>}
      <div role="list" className="link-card-table-list">
        {children}
      </div>
    </>);
}

LinkCardTable.Row = LinkCardTableRow;

export default LinkCardTable;
