import {
  Box,
  IconButton
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 3
      }}
    >
      <IconButton>
        <FacebookIcon />
      </IconButton>

      <IconButton>
        <InstagramIcon />
      </IconButton>

      <IconButton>
        <WhatsAppIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;