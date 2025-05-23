import {
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const theme = useTheme();
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <Container maxWidth="sm" disableGutters>
      <Stack spacing={-1}>
        <Typography
          sx={{
            background: "linear-gradient(90deg, #ff6a00, #ee0979)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            // textTransform: 'uppercase',
            textAlign: "center",
            fontSize: { xs: 30, sm: 32 },
            p: 2,
          }}
        >
          Todos os produtos
        </Typography>

        <Grid
          columns={{
            base:1,
            md:2,
            lg:3
          }}
          spacing={10}
          w={"full"}
        >

         {products.map((product) => (
          <ProductCard key={product._id} product={product} />
         ))}

        </Grid>

        <Typography
          sx={{
            width: "100%",
            color: theme.palette.text.primary,
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: 20, sm: 26 },
            p: 1,
            // background: "#ff6a00"
          }}
        >
          Nenhum produto encontrado 🚀 {" "}
          <Link to={"/create"} style={{ textDecoration: 'none' }}>
            <Typography
              as="span"
              sx={{
                background: "linear-gradient(90deg, #ff6a00, #ee0979)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontStyle: 'normal',
                fontSize: { xs: 20, sm: 20 },
              }}
            >

              Novo produto
            </Typography>
          </Link>
        </Typography>
      </Stack>
    </Container>
  );
}

export default HomePage;
