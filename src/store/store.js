import React from "react";

export const context = {
  arr: [],
  id: -1,
  setState: {},
};

const GlobalContext = React.createContext(context);

export default GlobalContext;
