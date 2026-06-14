import {
  Routes,
  Route
} from "react-router-dom";

import Layout from "../layout/Layout";

import Home from "../pages/Home";
import LocationDetails from "../pages/LocationDetails";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="/location/:id"
          element={<LocationDetails />}
        />
      </Route>

    </Routes>
  );
};

export default AppRoutes;