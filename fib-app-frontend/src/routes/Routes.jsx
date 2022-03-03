import React from "react";
import { FibPage, DummyPage } from "../containers";
import { Routes as ReactRoutes, Route } from "react-router-dom";

function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<FibPage />} />
      <Route path="/otherpage" element={<DummyPage />} />
    </ReactRoutes>
  );
}

export default Routes;
