import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#111111",
      contrastText: "#ffffff",
    },
  },

  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "rgba(12, 12, 14, 0.92)",

          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",

          borderBottom: "1px solid rgba(255,255,255,0.08)",

          boxShadow:
            "0 8px 30px rgba(0,0,0,0.12)",

          color: "#fff",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            px: {
              xs: 2,
              sm: 3,
              md: 5,
            },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              minHeight: {
                xs: 68,
                sm: 76,
              },

              justifyContent: "space-between",
            }}
          >
            {/* =========================
                BRAND
            ========================= */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                cursor: "pointer",

                "&:hover .logo": {
                  transform: "rotate(-5deg) scale(1.05)",
                },

                "&:hover .brand-name": {
                  letterSpacing: {
                    xs: "0.01em",
                    sm: "0.03em",
                  },
                },
              }}
            >
              {/* Logo */}
              <Box
                className="logo"
                component="img"
                src="/Images/companylogo/companylogo3.jpeg"
                alt="Pixcel Studio"
                sx={{
                  width: {
                    xs: 44,
                    sm: 50,
                    md: 54,
                  },

                  height: {
                    xs: 44,
                    sm: 50,
                    md: 54,
                  },

                  mr: {
                    xs: 1.2,
                    sm: 1.5,
                    md: 1.8,
                  },

                  borderRadius: "50%",

                  objectFit: "cover",

                  border:
                    "2px solid rgba(255,255,255,0.85)",

                  boxShadow:
                    "0 0 0 3px rgba(255,255,255,0.06), 0 5px 20px rgba(0,0,0,0.35)",

                  transition:
                    "transform 0.4s cubic-bezier(0.2,0.8,0.2,1)",
                }}
              />

              {/* Brand text */}
              <Box>
                <Typography
                  className="brand-name"
                  component="div"
                  sx={{
                    fontSize: {
                      xs: "1.15rem",
                      sm: "1.35rem",
                      md: "1.5rem",
                    },

                    lineHeight: 1,

                    fontWeight: 700,

                    letterSpacing: {
                      xs: "0.01em",
                      sm: "0.02em",
                    },

                    background:
                      "linear-gradient(90deg, #ffffff, #e7e7e7, #ffffff)",

                    backgroundSize: "200% auto",

                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",

                    transition:
                      "letter-spacing 0.4s ease",

                    textShadow:
                      "0 2px 15px rgba(255,255,255,0.08)",
                  }}
                >
                  Pixcel Studio
                </Typography>

                {/* Tagline */}
                <Typography
                  sx={{
                    mt: 0.5,

                    fontSize: {
                      xs: "0.55rem",
                      sm: "0.62rem",
                      md: "0.68rem",
                    },

                    letterSpacing: {
                      xs: "0.18em",
                      sm: "0.25em",
                    },

                    textTransform: "uppercase",

                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  Photography • Films
                </Typography>
              </Box>
            </Box>

            {/* =========================
                NAVIGATION
            ========================= */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                alignItems: "center",

                gap: 1,
              }}
            >
              {["Home", "Gallery", "About", "Contact"].map(
                (item) => (
                  <Button
                    key={item}
                    sx={{
                      position: "relative",

                      color: "rgba(255,255,255,0.75)",

                      px: 2,

                      fontSize: "0.85rem",

                      fontWeight: 500,

                      letterSpacing: "0.05em",

                      textTransform: "none",

                      borderRadius: "8px",

                      transition:
                        "all 0.3s ease",

                      "&::after": {
                        content: '""',

                        position: "absolute",

                        bottom: 4,

                        left: "50%",

                        width: 0,

                        height: "2px",

                        borderRadius: "10px",

                        background:
                          "linear-gradient(90deg, #ff006e, #ffb700, #00c853, #00b8ff, #635bff)",

                        transform:
                          "translateX(-50%)",

                        transition:
                          "width 0.3s ease",
                      },

                      "&:hover": {
                        backgroundColor:
                          "rgba(255,255,255,0.06)",

                        color: "#fff",
                      },

                      "&:hover::after": {
                        width: "45%",
                      },
                    }}
                  >
                    {item}
                  </Button>
                )
              )}
            </Box>

            {/* =========================
                BOOK NOW
            ========================= */}
            <Button
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },

                ml: 2,

                px: {
                  sm: 2,
                  md: 2.5,
                },

                py: 1,

                borderRadius: "30px",

                color: "#fff",

                fontSize: {
                  sm: "0.75rem",
                  md: "0.82rem",
                },

                fontWeight: 600,

                letterSpacing: "0.04em",

                textTransform: "none",

                background:
                  "linear-gradient(90deg, #ff006e, #7c4dff, #00b8ff)",

                backgroundSize: "200% auto",

                boxShadow:
                  "0 5px 20px rgba(124,77,255,0.25)",

                transition:
                  "all 0.4s ease",

                "&:hover": {
                  backgroundPosition:
                    "100% center",

                  transform:
                    "translateY(-2px)",

                  boxShadow:
                    "0 8px 28px rgba(124,77,255,0.4)",
                },
              }}
            >
              Book a Session
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;