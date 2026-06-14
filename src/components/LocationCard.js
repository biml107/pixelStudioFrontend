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
        cursor: "pointer"
      }}
    >
      <CardMedia
        component="img"
        image={location.image}
        height="250"
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