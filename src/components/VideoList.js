import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography
} from "@mui/material";

const VideoGallery = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        {videoData.map((video) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={video.id}
          >
            <Card>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio:
                    video.orientation === "portrait"
                      ? "9 / 16"
                      : "16 / 9"
                }}
              >
                <iframe
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    border: "none"
                  }}
                />
              </Box>

              <CardContent>
                <Typography variant="subtitle1">
                  {video.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VideoGallery;