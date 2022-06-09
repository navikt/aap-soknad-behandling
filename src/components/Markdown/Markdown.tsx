import ReactMarkdown from "react-markdown";
import * as styles from "./markdown.module.css";

type MarkdownProps = {
  tekst: string;
};

const Markdown = ({ tekst }: MarkdownProps): JSX.Element => (
  <ReactMarkdown className={styles.markdown}>{tekst}</ReactMarkdown>
);

export { Markdown };
