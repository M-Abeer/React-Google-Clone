import { Result } from "postcss";
import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";

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
