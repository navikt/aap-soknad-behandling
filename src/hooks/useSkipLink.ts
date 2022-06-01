import { useContext, useEffect } from "react";
import { SkipLinkContext } from "../contexts/SkipLinkContext";

interface SkipLink {
  title: string;
  skipTo: string;
}

interface SkipLinkProps {
  skipLinks: SkipLink[];
}

const useSkipLink = ({ skipLinks }: SkipLinkProps) => {
  const skipLinkContext = useContext(SkipLinkContext);
  useEffect(() => {
    if (skipLinkContext) {
      skipLinkContext.updateSkipLinks(skipLinks);
    }
  }, []);
};

export { useSkipLink };
