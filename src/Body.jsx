import React from "react";
import Result from "./Result";

import { Route, Switch, Redirect } from "react-router-dom";

const Body = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search"></Redirect>
        </Route>
        <Route exact path={["/search", "/images", "/news", "/videos"]}>
          <Result />
        </Route>
      </Switch>
    </div>
  );
};

export default Body;
