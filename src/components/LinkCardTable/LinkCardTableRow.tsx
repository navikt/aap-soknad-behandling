import {LinkPanel} from "@navikt/ds-react";
import React from "react";

export type LinkCardTableRowType = {
  href?: string;
  onClick: Function;
  children: React.ReactNode;
}

export const LinkCardTableRow = ({ href, onClick, children }: LinkCardTableRowType) => {
  return (
    <LinkPanel onClick={() => onClick()}>
      <div className="link-card-table-row" >
        {children}
      </div>
    </LinkPanel>
  );
};
