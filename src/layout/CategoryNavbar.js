import {
  Box,
  Button
} from "@mui/material";

import { useAppContext } from "../context/AppContext";

const CategoryNavbar = () => {
  const {
    studioData,
    selectedCategory,
    setSelectedCategory
  } = useAppContext();

  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        p: 1,
        bgcolor: "#fff",
        position: "sticky",
        top: 0,
        gap:1,
        zIndex: 1000
      }}
    >
      {studioData.categories.map((category) => (
        <Button
        sx={{
    mr: 1,
    flexShrink: 0,
  }}
          key={category.id}
          variant={
            selectedCategory.id === category.id
              ? "contained"
              : "text"
          }
          onClick={() =>
            setSelectedCategory(category)
          }
        >
          {category.name}
        </Button>
      ))}
    </Box>
  );
};

export default CategoryNavbar;