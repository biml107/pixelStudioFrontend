import { Box } from "@mui/material";
//import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

//import { useAppContext } from "../context/AppContext";
//import LocationCard from "../components/LocationCard";
import VideoCarousel from "../components/VideoCarousel";
import {TitlebarBelowMasonryImageList } from "../components/ImageList";
const Home = () => {
 // const navigate = useNavigate();

  //const { selectedCategory } = useAppContext();
const videos = [
  "https://res.cloudinary.com/dm79pcqaj/video/upload/v1782069457/Ankit_Teaser_005_1_v2j5qc.mp4",
  "https://res.cloudinary.com/dm79pcqaj/video/upload/v1782069497/Ankit_Teaser_005_2_yzedrk.mp4",
  "https://res.cloudinary.com/dm79pcqaj/video/upload/v1782069536/Ankit_Teaser_005_3_vldktu.mp4"
];

  return (
    <Box
      sx={{
        p: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* {selectedCategory.locations.map((location) => (
        <LocationCard
          key={location.id}
          location={location}
          onClick={() =>
            navigate(`/location/${location.id}`)
          }
        />
      ))} */}

      <VideoCarousel videos={videos} />
      <Box
    sx={{
      textAlign: "center",
      py: { xs: 6, md: 10 },
      px: 2,
    }}
  >
    <Typography
      variant="h3"
      fontWeight="bold"
      gutterBottom
    >
      Turning Moments Into Timeless Memories
    </Typography>

    <Typography
      variant="h6"
      color="text.secondary"
    >
      Professional Photography &
      Cinematic Videography
    </Typography>
  </Box>
      <TitlebarBelowMasonryImageList />

    </Box>
  );
};

export default Home;