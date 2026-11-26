import {
  Routes,
  Route
} from "react-router-dom";

import Layout from "../layout/Layout";

import Home from "../pages/Home";
import LocationDetails from "../pages/LocationDetails";
import WeddingCard from "../pages/weddingcards/WeddingCard";
import WeddingCard1 from "../pages/weddingcards/WeddingCard1";

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
      {/* Independent wedding invitation */}
  <Route
    path="/weddingcard"
    element={<WeddingCard />}
  />
    <Route
    path="/weddingcard1"
    element={<WeddingCard1 />}
  />

    </Routes>
  );
};

export default AppRoutes;