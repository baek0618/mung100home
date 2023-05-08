import React, { useLayoutEffect, useState } from "react";
import { BrowserRouterProps, Router } from "react-router-dom";
import { BrowserHistory } from "history";
import customHistory from "./history";

const CustomRouter = ({ basename, history, children }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return (
    <Router
      navigator={customHistory}
      location={state.location}
      navigationType={state.action}
      basename={basename}
    >
      {children}
    </Router>
  );
};

export default CustomRouter;
