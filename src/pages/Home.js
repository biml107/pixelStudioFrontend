import {
  Grid
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useAppContext } from "../context/AppContext";
import LocationCard from "../components/LocationCard";

const Home = () => {
  const navigate = useNavigate();

  const { selectedCategory } =
    useAppContext();

  return (
    <Grid
      container
      spacing={2}
      sx={{ p: 2 }}
    >
      {selectedCategory.locations.map(
        (location) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={location.id}
          >
            <LocationCard
              location={location}
              onClick={() =>
                navigate(
                  `/location/${location.id}`
                )
              }
            />
          </Grid>
        )
      )}
    </Grid>
  );
};

export default Home;