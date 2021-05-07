import React, { ReactElement } from "react";
import ReactDOM from "react-dom";

export const App = (): ReactElement => {
  return <h1>Tripalosky</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
