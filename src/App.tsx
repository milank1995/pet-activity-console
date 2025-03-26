import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout";
import Dashboard from "./pages/dashboard";
import Rewards from "./pages/rewards";
import Users from "./pages/users";
import { routeConstants } from "./router/routeConstants.ts";

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={routeConstants.dashboard} element={<Dashboard />} />
        <Route path={routeConstants.rewards} element={<Rewards />} />
        <Route path={routeConstants.usersView} element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
