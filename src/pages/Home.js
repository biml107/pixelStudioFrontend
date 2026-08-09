import { Box } from "@mui/material";
//import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

//import { useAppContext } from "../context/AppContext";
//import LocationCard from "../components/LocationCard";
// import VideoCarousel from "../components/VideoCarousel";
import {TitlebarBelowMasonryImageList } from "../components/ImageList";
const Home = () => {
 // const navigate = useNavigate();

  //const { selectedCategory } = useAppContext();
const videos = [
  "https://res.cloudinary.com/dm79pcqaj/video/upload/v1782069457/Ankit_Teaser_005_1_v2j5qc.mp4",
  "https://res.cloudinary.com/dm79pcqaj/video/upload/v1782069497/Ankit_Teaser_005_2_yzedrk.mp4",
  "https://res.cloudinary.com/dm79pcqaj/video/upload/v1782069536/Ankit_Teaser_005_3_vldktu.mp4"
];

  return (
    <Box
      sx={{
        p: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* {selectedCategory.locations.map((location) => (
        <LocationCard
          key={location.id}
          location={location}
          onClick={() =>
            navigate(`/location/${location.id}`)
          }
        />
      ))} */}

      {/* <VideoCarousel videos={videos} /> */}
    <Box
  sx={{
    position: "relative",
    textAlign: "center",
    py: { xs: 7, sm: 9, md: 13 },
    px: { xs: 1.5, sm: 3, md: 4 },
    overflow: "hidden",
    backgroundColor: "#fff",

    /* Soft colorful glow behind heading */
    "&::before": {
      content: '""',
      position: "absolute",
      width: { xs: "280px", sm: "450px", md: "650px" },
      height: { xs: "180px", sm: "250px", md: "350px" },
      top: "25%",
      left: "50%",
      transform: "translate(-50%, -50%)",

      background:
        "radial-gradient(circle, rgba(255,0,110,0.10), rgba(0,180,255,0.08), transparent 70%)",

      filter: "blur(50px)",
      pointerEvents: "none",
    },

    /* Animations */
    "@keyframes rainbowText": {
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

    "@keyframes shine": {
      "0%": {
        transform: "translateX(-120%)",
      },
      "100%": {
        transform: "translateX(120%)",
      },
    },

    "@keyframes fadeUp": {
      "0%": {
        opacity: 0,
        transform: "translateY(25px)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },

    "@keyframes rainbowLine": {
      "0%": {
        backgroundPosition: "0% 50%",
      },
      "100%": {
        backgroundPosition: "200% 50%",
      },
    },

    "@keyframes float": {
      "0%, 100%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(-5px)",
      },
    },
  }}
>
  {/* =========================
      STUDIO LABEL
  ========================= */}
  <Typography
    sx={{
      position: "relative",
      zIndex: 1,

      fontSize: {
        xs: "0.62rem",
        sm: "0.72rem",
        md: "0.8rem",
      },

      fontWeight: 600,

      letterSpacing: {
        xs: "0.22em",
        sm: "0.32em",
        md: "0.42em",
      },

      textTransform: "uppercase",

      background:
        "linear-gradient(90deg, #ff006e, #ff8a00, #ffd000, #00c853, #00b0ff, #7c4dff, #ff006e)",

      backgroundSize: "300% auto",

      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",

      animation: "rainbowText 6s ease infinite",

      mb: { xs: 2, md: 2.5 },
    }}
  >
    ✦ Pixcel Studio ✦
  </Typography>

  {/* =========================
      MAIN HEADING
  ========================= */}
  <Box
    sx={{
      position: "relative",

      width: "100%",
      maxWidth: "1000px",

      mx: "auto",

      overflow: "hidden",

      px: { xs: 0.5, sm: 1 },

      cursor: "default",

      "&:hover .main-title": {
        transform: {
          xs: "none",
          sm: "scale(1.02)",
        },

        filter: {
          xs: "none",
          sm: "drop-shadow(0 8px 25px rgba(255, 0, 110, 0.18))",
        },
      },

      "&:hover .shine": {
        animationDuration: "0.9s",
      },
    }}
  >
    <Typography
      className="main-title"
      component="h1"
      sx={{
        position: "relative",
        zIndex: 1,

        width: "100%",
        maxWidth: "100%",

        mx: "auto",

        fontWeight: 800,

        /*
         * Fluid responsive typography
         * Works on 320px phones -> desktop
         */
        fontSize: {
          xs: "clamp(1.75rem, 8.5vw, 2.5rem)",
          sm: "clamp(2.5rem, 6vw, 3.5rem)",
          md: "clamp(3.5rem, 5vw, 4.6rem)",
        },

        lineHeight: {
          xs: 1.15,
          sm: 1.1,
          md: 1.08,
        },

        letterSpacing: {
          xs: "-0.025em",
          sm: "-0.035em",
          md: "-0.045em",
        },

        /*
         * Keep the first line together
         */
        whiteSpace: {
          xs: "normal",
          sm: "nowrap",
        },

        transition:
          "transform 0.5s cubic-bezier(0.2,0.8,0.2,1), filter 0.5s ease",

        /*
         * Rainbow gradient
         */
        background:
          "linear-gradient(90deg, #ff006e, #ff4d00, #ffb700, #00c853, #00b8ff, #635bff, #d500f9, #ff006e)",

        backgroundSize: "400% 400%",

        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",

        animation:
          "rainbowText 8s ease infinite, fadeUp 1s ease forwards",
      }}
    >
      Turning Moments Into

      <br />

      {/* Second line */}
      <Box
        component="span"
        sx={{
          display: "inline-block",

          fontStyle: "italic",
          fontWeight: 500,

          /*
           * Prevent second line from breaking
           */
          whiteSpace: "nowrap",

          background:
            "linear-gradient(90deg, #635bff, #00b8ff, #00c853, #ffb700, #ff006e, #d500f9)",

          backgroundSize: "400% 400%",

          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",

          animation: "rainbowText 7s ease infinite",
        }}
      >
        Timeless Memories
      </Box>
    </Typography>

    {/* =========================
        MOVING SHINE
    ========================= */}
    <Box
      className="shine"
      sx={{
        position: "absolute",

        zIndex: 2,

        top: 0,
        left: 0,

        width: "30%",
        height: "100%",

        background:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent)",

        transform: "translateX(-120%)",

        animation: "shine 4s ease-in-out infinite",

        pointerEvents: "none",

        filter: "blur(3px)",
      }}
    />
  </Box>

  {/* =========================
      DECORATIVE DIVIDER
  ========================= */}
  <Box
    sx={{
      display: "flex",

      alignItems: "center",

      justifyContent: "center",

      gap: {
        xs: 1.5,
        sm: 2,
      },

      my: {
        xs: 3,
        sm: 3.5,
        md: 4,
      },
    }}
  >
    {/* Left line */}
    <Box
      sx={{
        width: {
          xs: 30,
          sm: 60,
          md: 100,
        },

        height: "2px",

        background:
          "linear-gradient(90deg, transparent, #ff006e, #ffb700)",

        borderRadius: "10px",
      }}
    />

    {/* Center dot */}
    <Box
      sx={{
        flexShrink: 0,

        width: {
          xs: 8,
          md: 10,
        },

        height: {
          xs: 8,
          md: 10,
        },

        borderRadius: "50%",

        background:
          "linear-gradient(135deg, #ff006e, #ffb700, #00c853, #00b8ff, #635bff)",

        boxShadow:
          "0 0 12px rgba(99, 91, 255, 0.35)",

        animation: "float 3s ease-in-out infinite",
      }}
    />

    {/* Right line */}
    <Box
      sx={{
        width: {
          xs: 30,
          sm: 60,
          md: 100,
        },

        height: "2px",

        background:
          "linear-gradient(90deg, #00b8ff, #635bff, transparent)",

        borderRadius: "10px",
      }}
    />
  </Box>

  {/* =========================
      SUBTITLE
  ========================= */}
  <Typography
    sx={{
      position: "relative",
      zIndex: 1,

      width: "100%",
      maxWidth: "700px",

      mx: "auto",

      px: {
        xs: 1,
        sm: 0,
      },

      fontSize: "clamp(0.82rem, 3.5vw, 1.15rem)",

      lineHeight: {
        xs: 1.7,
        sm: 1.8,
      },

      fontWeight: 400,

      letterSpacing: {
        xs: "0.02em",
        sm: "0.05em",
        md: "0.08em",
      },

      color: "#555",

      animation: "fadeUp 1.4s ease forwards",
    }}
  >
    <Box
      component="span"
      sx={{
        fontWeight: 600,

        background:
          "linear-gradient(90deg, #ff006e, #ff8a00, #00a86b, #635bff)",

        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Professional Photography
    </Box>

    <Box
      component="span"
      sx={{
        mx: {
          xs: 0.8,
          sm: 1.5,
        },

        color: "#aaa",

        WebkitTextFillColor: "#aaa",
      }}
    >
      •
    </Box>

    <Box
      component="span"
      sx={{
        fontWeight: 600,

        background:
          "linear-gradient(90deg, #635bff, #00b8ff, #00c853, #ff006e)",

        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Cinematic Videography
    </Box>
  </Typography>

  {/* =========================
      BOTTOM ACCENT
  ========================= */}
  <Box
    sx={{
      mt: {
        xs: 4,
        md: 5,
      },

      width: {
        xs: 70,
        sm: 100,
        md: 120,
      },

      height: "3px",

      mx: "auto",

      borderRadius: "20px",

      background:
        "linear-gradient(90deg, #ff006e, #ffb700, #00c853, #00b8ff, #635bff, #d500f9)",

      backgroundSize: "200% auto",

      animation: "rainbowLine 4s linear infinite",

      opacity: 0.75,
    }}
  />
</Box>
      <TitlebarBelowMasonryImageList />

    </Box>
  );
};

export default Home;