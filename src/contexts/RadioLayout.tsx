/**
 * Kun for demo-bruk. Skal slettes
 */

import { createContext, useState } from "react";
interface RadiolayoutType {
  layout: string;
  swapLayout: Function;
}

const RadioLayoutContext = createContext<RadiolayoutType | null>(null);
const RadioLayoutProvider = ({ children }: { children: React.ReactElement | React.ReactElement[] }): JSX.Element => {
  const [layout, toggleLayout] = useState<string>("vertical");
  const swapLayout = () => {
    toggleLayout(layout === "vertical" ? "horizontal" : "vertical");
  };
  return (
    <>
      <RadioLayoutContext.Provider value={{ layout, swapLayout }}>{children}</RadioLayoutContext.Provider>
    </>
  );
};

export { RadioLayoutContext, RadioLayoutProvider };
