import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

export const renderWithRouter = (component:JSX.Element, {route = '/'} = {}) => {
  window.history.pushState({}, '', route)

  return render(component, {wrapper: BrowserRouter})
};
