
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./components/MainLayout.tsx";
import {routeConstants} from "./router/routeConstants.ts";
import Dashboard from "./pages/dashboard";
import Rewards from "./pages/rewards";
function App() {

  return (
      <Routes>
          <Route element={<MainLayout/>}>
              <Route path={routeConstants.dashboard} element={<Dashboard/>}/>
              <Route path={routeConstants.rewards} element={<Rewards/>}/>
          </Route>
      </Routes>
  )
}

export default App
