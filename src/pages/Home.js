import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useAppContext } from "../context/AppContext";
import LocationCard from "../components/LocationCard";

const Home = () => {
  const navigate = useNavigate();

  const { selectedCategory } = useAppContext();

  return (
    <Box
      sx={{
        p: 2,
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 2,
      }}
    >
      {selectedCategory.locations.map((location) => (
        <LocationCard
          key={location.id}
          location={location}
          onClick={() =>
            navigate(`/location/${location.id}`)
          }
        />
      ))}
    </Box>
  );
};

export default Home;