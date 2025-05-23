import { Box, CardMedia } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "" }}
    >
      <CardMedia
        component="img"
        height="192"
        image={product.image}
        alt={product.name}
      />
    </Box>
  );
};

export default ProductCard;

//1:43:03 