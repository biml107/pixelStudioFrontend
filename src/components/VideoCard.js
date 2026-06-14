import { Card, Box } from "@mui/material";
import ReactPlayer from "react-player";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        minWidth: 350,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          aspectRatio: "16/9",
          width: "100%",
        }}
      >
        <ReactPlayer
          src={video.url}
          width="100%"
          height="100%"
          controls
          light={video.thumbnail} // optional
          playing={false}
        />
      </Box>
    </Card>
  );
};

export default VideoCard;