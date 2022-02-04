import {LinkPanel} from "@navikt/ds-react";
import React from "react";

export type LinkCardTableRowType = {
  href?: string;
  onClick: Function;
  children: React.ReactNode;
  selected?: boolean;
}

export const LinkCardTableRow = ({ href, onClick, children, selected }: LinkCardTableRowType) => {
  const isSelected = `${selected ? 'selected__row' : ''}`;
  return (
    <LinkPanel onClick={() => onClick()} className={isSelected}>
      <div className="link-card-table-row">
        {children}
      </div>
    </LinkPanel>
  );
};
