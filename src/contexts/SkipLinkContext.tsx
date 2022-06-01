import { createContext, useState } from "react";

interface SkipLinkContextType {
  skipLinks: SkipLink[];
  updateSkipLinks: Function;
}

interface SkipLink {
  title: string;
  skipTo: string;
}

const SkipLinkContext = createContext<SkipLinkContextType | null>(null);

const SkipLinkProvider = ({ children }: { children: React.ReactElement | React.ReactElement[] }): JSX.Element => {
  const [skipLinks, setSkipLink] = useState<SkipLink[]>([]);
  const updateSkipLinks = (skipLinks: SkipLink[]) => {
    setSkipLink(skipLinks);
  };
  return <SkipLinkContext.Provider value={{ skipLinks, updateSkipLinks }}>{children}</SkipLinkContext.Provider>;
};

export { SkipLinkProvider, SkipLinkContext };
