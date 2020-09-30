import React from "react";

import { ThemeProvider } from "./ThemeContext";

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
