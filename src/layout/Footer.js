import {
  Box,
  Typography,
  IconButton,
  Stack
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0ba2f4",
        color: "white",
        py: 4,
        px: 2,
        mt: 4,
      }}
    >
      {/* Company Name */}
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        mb={2}
      >
        Pixcel Studio
      </Typography>

      {/* Contact Details */}
      <Stack
        spacing={1}
        alignItems="center"
        mb={3}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <PhoneIcon fontSize="small" />
          <Typography>
            +91 9534404424
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <EmailIcon fontSize="small" />
          <Typography>
            contact@pixcelstudio.com
          </Typography>
        </Box>
      </Stack>

      {/* Social Media */}
      <Box textAlign="center" mb={2}>
        <IconButton
          href="https://www.facebook.com/profile.php?id=61552905053299"
          target="_blank"
          sx={{ color: "white" }}
        >
          <FacebookIcon />
        </IconButton>

        <IconButton
          href="https://www.instagram.com/pixcelstudio.in/"
          target="_blank"
          sx={{ color: "white" }}
        >
          <InstagramIcon />
        </IconButton>

        <IconButton
          href="https://wa.me/9534404424"
          target="_blank"
          sx={{ color: "white" }}
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>

      {/* Copyright */}
      <Typography
        variant="body2"
        textAlign="center"
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          pt: 2,
        }}
      >
        © {new Date().getFullYear()} Pixcel Studio.
        All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;