import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout";
import Dashboard from "./pages/dashboard";
import Rewards from "./pages/rewards";
import Users from "./pages/users";
import CreateAnnouncement from "./pages/createAnnouncement";
import Announcement from "./pages/announcement";
import { routeConstants } from "./router/routeConstants.ts";

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={routeConstants.dashboard} element={<Dashboard />} />
        <Route path={routeConstants.rewards} element={<Rewards />} />
        <Route path={routeConstants.usersView} element={<Users />} />
        <Route path={routeConstants.createAnnouncement} element={<CreateAnnouncement />} />
        <Route path={routeConstants.announcements} element={<Announcement />} />
      </Route>
    </Routes>
  );
}

export default App;
