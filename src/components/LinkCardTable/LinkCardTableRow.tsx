import {LinkPanel} from "@navikt/ds-react";
import React from "react";

export type LinkCardTableRowType = {
  href?: string;
  onClick: Function;
  children: React.ReactNode;
  selected?: boolean;
}

// eslint-disable-next-line no-unused-vars
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
