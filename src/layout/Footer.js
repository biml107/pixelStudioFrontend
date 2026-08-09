import {
  Box,
  Typography,
  IconButton,
  Stack,
  Container,
  Divider,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",

        mt: { xs: 5, md: 8 },

        color: "#fff",

        background:
          "linear-gradient(135deg, #0c0c0e 0%, #111116 50%, #09090b 100%)",

        /* =========================
           ANIMATIONS
        ========================= */
        "@keyframes rainbowLine": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },

        "@keyframes glow": {
          "0%, 100%": {
            opacity: 0.4,
          },
          "50%": {
            opacity: 0.7,
          },
        },

        /* =========================
           BACKGROUND GLOW
        ========================= */
        "&::before": {
          content: '""',

          position: "absolute",

          width: {
            xs: "250px",
            md: "500px",
          },

          height: {
            xs: "250px",
            md: "500px",
          },

          top: "-180px",
          left: "50%",

          transform: "translateX(-50%)",

          background:
            "radial-gradient(circle, rgba(124,77,255,0.12), rgba(0,184,255,0.05), transparent 70%)",

          filter: "blur(50px)",

          animation: "glow 5s ease-in-out infinite",

          pointerEvents: "none",
        },
      }}
    >
      {/* =========================
          RAINBOW TOP LINE
      ========================= */}
      <Box
        sx={{
          width: "100%",
          height: "3px",

          background:
            "linear-gradient(90deg, #ff006e, #ff8a00, #ffd000, #00c853, #00b8ff, #635bff, #d500f9, #ff006e)",

          backgroundSize: "300% auto",

          animation: "rainbowLine 8s linear infinite",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,

          py: {
            xs: 6,
            sm: 7,
            md: 9,
          },

          px: {
            xs: 2.5,
            sm: 4,
            md: 6,
          },
        }}
      >
        {/* =========================
            MAIN FOOTER CONTENT
        ========================= */}
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1.5fr 1fr 1fr",
            },

            gap: {
              xs: 5,
              sm: 5,
              md: 8,
            },

            alignItems: "start",
          }}
        >
          {/* =========================
              BRAND SECTION
          ========================= */}
          <Box
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "2.3rem",
                  md: "2.7rem",
                },

                fontWeight: 800,

                lineHeight: 1,

                letterSpacing: "-0.03em",

                background:
                  "linear-gradient(90deg, #ff006e, #ffb700, #00c853, #00b8ff, #635bff, #d500f9)",

                backgroundSize: "300% auto",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",

                animation: "rainbowLine 8s ease infinite",

                mb: 1.5,
              }}
            >
              Pixcel Studio
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "0.72rem",
                  sm: "0.78rem",
                  md: "0.82rem",
                },

                letterSpacing: {
                  xs: "0.2em",
                  sm: "0.25em",
                },

                textTransform: "uppercase",

                color: "rgba(255,255,255,0.5)",

                mb: 2.5,
              }}
            >
              Photography • Films
            </Typography>

            <Typography
              sx={{
                maxWidth: "430px",

                mx: {
                  xs: "auto",
                  md: 0,
                },

                fontSize: {
                  xs: "0.88rem",
                  sm: "0.92rem",
                  md: "0.95rem",
                },

                lineHeight: 1.8,

                color: "rgba(255,255,255,0.55)",
              }}
            >
              Turning your beautiful moments into timeless
              memories through photography and cinematic
              storytelling.
            </Typography>
          </Box>

          {/* =========================
              CONTACT SECTION
          ========================= */}
          <Box
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",

                fontWeight: 700,

                letterSpacing: "0.2em",

                textTransform: "uppercase",

                color: "#fff",

                mb: 2.5,
              }}
            >
              Get In Touch
            </Typography>

            <Stack
              spacing={1.5}
              alignItems={{
                xs: "center",
                md: "flex-start",
              }}
            >
              {/* Phone */}
              <Box
                component="a"
                href="tel:+919534404424"
                sx={{
                  display: "flex",
                  alignItems: "center",

                  gap: 1.5,

                  color: "rgba(255,255,255,0.65)",

                  textDecoration: "none",

                  transition: "all 0.3s ease",

                  "&:hover": {
                    color: "#fff",

                    transform: "translateX(4px)",
                  },

                  "&:hover .contact-icon": {
                    color: "#00b8ff",

                    backgroundColor:
                      "rgba(0,184,255,0.1)",
                  },
                }}
              >
                <Box
                  className="contact-icon"
                  sx={{
                    display: "flex",

                    alignItems: "center",
                    justifyContent: "center",

                    width: 36,
                    height: 36,

                    borderRadius: "10px",

                    border:
                      "1px solid rgba(255,255,255,0.1)",

                    transition: "all 0.3s ease",
                  }}
                >
                  <PhoneIcon fontSize="small" />
                </Box>

                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.85rem",
                      md: "0.9rem",
                    },
                  }}
                >
                  +91 9534404424
                </Typography>
              </Box>

              {/* Email */}
              <Box
                component="a"
                href="mailto:contact@pixcelstudio.com"
                sx={{
                  display: "flex",
                  alignItems: "center",

                  gap: 1.5,

                  color: "rgba(255,255,255,0.65)",

                  textDecoration: "none",

                  transition: "all 0.3s ease",

                  "&:hover": {
                    color: "#fff",

                    transform: "translateX(4px)",
                  },

                  "&:hover .contact-icon": {
                    color: "#d500f9",

                    backgroundColor:
                      "rgba(213,0,249,0.1)",
                  },
                }}
              >
                <Box
                  className="contact-icon"
                  sx={{
                    display: "flex",

                    alignItems: "center",
                    justifyContent: "center",

                    width: 36,
                    height: 36,

                    borderRadius: "10px",

                    border:
                      "1px solid rgba(255,255,255,0.1)",

                    transition: "all 0.3s ease",
                  }}
                >
                  <EmailIcon fontSize="small" />
                </Box>

                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.8rem",
                      md: "0.9rem",
                    },

                    wordBreak: "break-word",
                  }}
                >
                  contact@pixcelstudio.com
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* =========================
              SOCIAL SECTION
          ========================= */}
          <Box
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",

                fontWeight: 700,

                letterSpacing: "0.2em",

                textTransform: "uppercase",

                mb: 2.5,
              }}
            >
              Follow Our Work
            </Typography>

            <Typography
              sx={{
                fontSize: "0.85rem",

                color: "rgba(255,255,255,0.5)",

                mb: 2,
              }}
            >
              Follow us for latest stories &amp; shoots.
            </Typography>

            <Box
              sx={{
                display: "flex",

                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },

                gap: 1,
              }}
            >
              {/* Facebook */}
              <IconButton
                component="a"
                href="https://www.facebook.com/profile.php?id=61552905053299"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={{
                  width: 42,
                  height: 42,

                  color: "rgba(255,255,255,0.65)",

                  border:
                    "1px solid rgba(255,255,255,0.1)",

                  borderRadius: "12px",

                  transition:
                    "all 0.3s cubic-bezier(0.2,0.8,0.2,1)",

                  "&:hover": {
                    color: "#1877F2",

                    backgroundColor:
                      "rgba(24,119,242,0.1)",

                    borderColor:
                      "rgba(24,119,242,0.4)",

                    transform: "translateY(-4px)",

                    boxShadow:
                      "0 8px 20px rgba(24,119,242,0.15)",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>

              {/* Instagram */}
              <IconButton
                component="a"
                href="https://www.instagram.com/pixcelstudio.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={{
                  width: 42,
                  height: 42,

                  color: "rgba(255,255,255,0.65)",

                  border:
                    "1px solid rgba(255,255,255,0.1)",

                  borderRadius: "12px",

                  transition:
                    "all 0.3s cubic-bezier(0.2,0.8,0.2,1)",

                  "&:hover": {
                    color: "#E4405F",

                    backgroundColor:
                      "rgba(228,64,95,0.1)",

                    borderColor:
                      "rgba(228,64,95,0.4)",

                    transform: "translateY(-4px)",

                    boxShadow:
                      "0 8px 20px rgba(228,64,95,0.15)",
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>

              {/* WhatsApp */}
              <IconButton
                component="a"
                href="https://wa.me/9534404424"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                sx={{
                  width: 42,
                  height: 42,

                  color: "rgba(255,255,255,0.65)",

                  border:
                    "1px solid rgba(255,255,255,0.1)",

                  borderRadius: "12px",

                  transition:
                    "all 0.3s cubic-bezier(0.2,0.8,0.2,1)",

                  "&:hover": {
                    color: "#25D366",

                    backgroundColor:
                      "rgba(37,211,102,0.1)",

                    borderColor:
                      "rgba(37,211,102,0.4)",

                    transform: "translateY(-4px)",

                    boxShadow:
                      "0 8px 20px rgba(37,211,102,0.15)",
                  },
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* =========================
            DIVIDER
        ========================= */}
        <Divider
          sx={{
            mt: {
              xs: 5,
              md: 7,
            },

            borderColor:
              "rgba(255,255,255,0.08)",
          }}
        />

        {/* =========================
            COPYRIGHT
        ========================= */}
        <Box
          sx={{
            display: "flex",

            flexDirection: {
              xs: "column",
              sm: "row",
            },

            alignItems: "center",

            justifyContent: "space-between",

            gap: 1.5,

            pt: 3,

            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "0.7rem",
                sm: "0.75rem",
              },

              color:
                "rgba(255,255,255,0.4)",
            }}
          >
            © {new Date().getFullYear()} Pixcel Studio.
            All Rights Reserved.
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "0.68rem",
                sm: "0.72rem",
              },

              color:
                "rgba(255,255,255,0.3)",

              letterSpacing: "0.03em",
            }}
          >
            Crafted with passion for timeless stories.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;