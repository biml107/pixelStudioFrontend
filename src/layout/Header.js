import {
  AppBar,
  Toolbar,
  Typography,
  Box
} from "@mui/material";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>

        <Box
          component="img"
          src="/logo.png"
          sx={{
            width: 50,
            height: 50,
            mr: 2
          }}
        />

        <Typography variant="h6">
          Pixcel Studio
        </Typography>

      </Toolbar>
    </AppBar>
  );
};

export default Header;