import { useContext } from "react";
import { Link } from "@navikt/ds-react";
import { SkipLinkContext } from "../../contexts/SkipLinkContext";

import * as styles from "./skipLinks.module.css";

const SkipLinks = (): JSX.Element => {
  const skipLinkContext = useContext(SkipLinkContext);
  if (!skipLinkContext || skipLinkContext.skipLinks.length === 0) {
    return <span>Har ingen skipLinks</span>;
  }
  const links = skipLinkContext.skipLinks.map((elem) => (
    <Link key={elem.title} href={`#${elem.skipTo}`}>
      {elem.title}
    </Link>
  ));
  return <nav className={styles.skipLinks}>{links}</nav>;
};

export { SkipLinks };
