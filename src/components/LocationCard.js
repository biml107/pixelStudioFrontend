import {
  Card,
  CardMedia,
  CardContent,
  Typography
} from "@mui/material";

const LocationCard = ({
  location,
  onClick
}) => {
  return (
    <Card
      onClick={() => onClick(location)}
      sx={{
        cursor: "pointer",
         height: "100%",
      display: "flex",
    flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={location.image}
         sx={{
    height: 400,
    objectFit: "cover",
  }}
      />

      <CardContent>
        <Typography>
          {location.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LocationCard;