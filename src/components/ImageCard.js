import {
  Card,
  CardMedia
} from "@mui/material";

const ImageCard = ({ image }) => {
  return (
    <Card
      sx={{
        minWidth: 250
      }}
    >
      <CardMedia
        component="img"
        image={image.image}
        height="250"
      />
    </Card>
  );
};

export default ImageCard;