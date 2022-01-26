import {LinkPanel} from "@navikt/ds-react";
import React from "react";

export type LinkCardTableRowType = {
  href: string;
  children: React.ReactNode;
}

export const LinkCardTableRow = ({ href, children }: LinkCardTableRowType) => {
  return (
    <LinkPanel href={href}>
      <div className="link-card-table-row" >
        {children}
      </div>
    </LinkPanel>
  );
};
