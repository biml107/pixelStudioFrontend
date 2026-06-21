import {
  AppBar,
  Toolbar,
  Typography,
  Box
} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const customTheme = createTheme({
palette: {
primary: {
main: '#1f91f5',
contrastText: '#FFFF',
},
},
});
const Header = () => {
  return (
    <ThemeProvider theme={customTheme}>
    <AppBar position="sticky" sx={{ mb: 0 }}>
      <Toolbar>

        <Box
          component="img"
          src="/Images/companylogo/companylogo3.jpeg"
          sx={{
            width: 50,
            height: 50,
            mr: 2,
            borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid white",
          }}
        />

        <Typography variant="h6">
          Pixcel Studio
        </Typography>

      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
};

export default Header;