import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Fab } from "@mui/material";

const FloatingWhatsapp = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/919534404424",
      "_blank"
    );
  };

  return (
    <Fab
      color="success"
      onClick={handleClick}
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 9999
      }}
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default FloatingWhatsapp;