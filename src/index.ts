import "./styles.css";

export { listAllCssVariables } from "./utils/css-variables.js";

import * as Devtools from "./components/list-themes/CssVariablesDevtools.js";
export const CssVariablesDevtools: (typeof Devtools)["CssVariablesDevtools"] =
  process.env.NODE_ENV !== "development"
    ? function () {
        return null;
      }
    : Devtools.CssVariablesDevtools;
