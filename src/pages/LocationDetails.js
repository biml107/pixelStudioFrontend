import React from "react";
import {
  Box,
  Typography,
  Button,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import {TitlebarBelowMasonryImageList } from "../components/ImageList";

import { useAppContext } from "../context/AppContext";
import VideoCard from "../components/VideoCard";
//// import ImageCard from "../components/ImageCard";

const LocationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { selectedCategory } = useAppContext();

  const location = selectedCategory?.locations?.find(
    (loc) => loc.id === Number(id)
  );

  if (!location) {
    return (
      <Box p={3}>
        <Alert severity="error">
          Location not found.
        </Alert>

        <Button
          sx={{ mt: 2 }}
          variant="contained"
          onClick={() => navigate("/")}
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, md: 0 } ,backgroundColor:"#d6cdcd", minHeight:"100vh"}}>
      {/* Back Button */}
      <Button
        startIcon={<ArrowBackIcon />}
        variant="outlined"
        sx={{ mb: 1 }}
        onClick={() => navigate("/")}
      >
        Back
      </Button>

      {/* Location Title
      <Typography
        variant="h4"
        fontWeight={600}
        gutterBottom
      >
        {location.name}
      </Typography> */}

      {/* Videos Section */}
      <Typography
        variant="h5"
        sx={{
          mt: 1,
          mb: 2,
          fontWeight: 600,
        }}
      >
        {location.name}(Videos)
      </Typography>

      {location.videos?.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            pb: 2,

            "&::-webkit-scrollbar": {
              height: "8px",
            },

            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#bdbdbd",
              borderRadius: "10px",
            },
          }}
        >
          {location.videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
            />
          ))}
        </Box>
      ) : (
        <Typography color="text.secondary">
          No videos available.
        </Typography>
      )}

      {/* Images Section */}
      <Typography
        variant="h5"
        sx={{
          mt: 5,
          mb: 2,
          fontWeight: 600,
        }}
      >
        Images
      </Typography>

      {/* {location.images?.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            pb: 2,

            "&::-webkit-scrollbar": {
              height: "8px",
            },

            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#bdbdbd",
              borderRadius: "10px",
            },
          }}
        >
          {location.images.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
            />
          ))}
        </Box>
      ) : (
        <Typography color="text.secondary">
          No images available.
        </Typography>
      )} */}
      <TitlebarBelowMasonryImageList />
    </Box>
  );
};

export default LocationDetails;