import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography } from "@mui/material";

 function TitlebarBelowMasonryImageList() {
  return (
 <Box
  sx={{
    width: "95%",
    maxWidth: "1600px",
    height: { xs: 500, sm: 600, md: 700 },
    mx: "auto",

    overflowY: "auto",
    overflowX: "hidden",

    // Hide scrollbar
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },

    // Small padding so hover effects don't get clipped
    p: { xs: 0.5, sm: 1 },
  }}
>
  <ImageList
    variant="masonry"
    cols={useMediaQuery("(min-width:900px)") ? 4 : 2}
    gap={{ xs: 6, sm: 8 }}
    sx={{
      m: 0,
    }}
  >
    {itemData.map((item) => (
      <Box
        key={item.img}
        sx={{
          position: "relative",
          overflow: "hidden",

          borderRadius: {
            xs: "14px",
            sm: "18px",
            md: "22px",
          },

          cursor: "pointer",

          backgroundColor: "#f5f5f5",

          border: "1px solid rgba(0,0,0,0.06)",

          boxShadow:
            "0 4px 15px rgba(0,0,0,0.06)",

          transition:
            "transform 0.45s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.45s ease",

          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow:
              "0 18px 40px rgba(0,0,0,0.18)",

            "& img": {
              transform: "scale(1.08)",
            },

            "& .image-overlay": {
              opacity: 1,
            },

            "& .image-title": {
              transform: "translateY(0)",
              opacity: 1,
            },
          },
        }}
      >
        {/* Image */}
        <Box
          component="img"
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${item.img}?w=248&fit=crop&auto=format`}
          alt={item.title}
          loading="lazy"
          sx={{
            width: "100%",
            height: "auto",

            display: "block",

            objectFit: "cover",

            transition:
              "transform 0.7s cubic-bezier(0.2,0.8,0.2,1)",

            willChange: "transform",
          }}
        />

        {/* Dark gradient overlay */}
        <Box
          className="image-overlay"
          sx={{
            position: "absolute",

            inset: 0,

            opacity: 0,

            transition: "opacity 0.45s ease",

            background:
              "linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.75) 100%)",

            pointerEvents: "none",
          }}
        />

        {/* Image title */}
        <Box
          className="image-title"
          sx={{
            position: "absolute",

            bottom: 0,
            left: 0,
            right: 0,

            p: {
              xs: 1.5,
              sm: 2,
              md: 2.5,
            },

            transform: "translateY(15px)",
            opacity: 0,

            transition:
              "all 0.45s cubic-bezier(0.2,0.8,0.2,1)",

            color: "#fff",

            pointerEvents: "none",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "0.85rem",
                sm: "0.95rem",
                md: "1rem",
              },

              fontWeight: 600,

              letterSpacing: "0.04em",

              textShadow:
                "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            {item.title}
          </Typography>
        </Box>
      </Box>
    ))}
  </ImageList>
</Box>
  );
}

const itemData = [
  {
    img: '/Images/prewedding/image1.jpeg',
    title: 'Pre Wedding',
    author: 'swabdesign',
  },
  {
    img: '/Images/prewedding/image2.jpeg',
    title: 'Pre Wedding',
    author: 'Pavel Nekoranec',
  },
  {
    img: '/Images/prewedding/image3.jpeg',
    title: 'Prewedding',
    author: 'Charles Deluvio',
  },
  {
    img: '/Images/makeup/image3.jpeg',
    title: 'Makeup',
    author: 'Christian Mackie',
  },
  {
    img: '/Images/makeup/image2.jpeg',
    title: 'Makeup',
    author: 'Darren Richardson',
  },
  {
    img: '/Images/makeup/image1.jpeg',
    title: 'Makeup',
    author: 'Taylor Simpson',
  },
  {
    img: '/Images/makeup/image2.jpeg',
    title: 'Makeup',
    author: 'Ben Kolde',
  },
  {
    img: '/Images/makeup/image2.jpeg',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: '/Images/makeup/image2.jpeg',
    title: 'Makeup',
    author: 'Jen P.',
  },
  {
    img: '/Images/makeup/image1.jpeg',
    title: 'Makeup',
    author: 'Douglas Sheppard',
  },
  {
    img: '/Images/makeup/image2.jpeg',
    title: 'Makeup',
    author: 'Fi Bell',
  },
  {
    img: '/Images/makeup/image3.jpeg',
    title: 'Makeup',
    author: 'Hutomo Abrianto',
  },
  {
    img: '/Images/prewedding/image31.jpeg',
    title: 'Prewedding',
    author: 'Hutomo Abrianto',
  },
  {
    img: '/Images/prewedding/image32.jpeg',
    title: 'Prewedding',
    author: 'Hutomo Abrianto',
  },
  {
    img: '/Images/prewedding/image33.jpeg',
    title: 'Prewedding',
    author: 'Hutomo Abrianto',
  },
  

  
  

  

];
export {TitlebarBelowMasonryImageList};
