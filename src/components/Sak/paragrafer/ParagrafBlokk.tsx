import * as styles from "./paragraf.module.css";

const ParagrafBlokk = ({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element => (
  <div className={styles.paragraf__blokk}>{children}</div>
);
export { ParagrafBlokk };
