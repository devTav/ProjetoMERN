import {
  Container,
  Typography,
  Box,
  Stack,
  TextField,
  Button,
  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { useProductStore } from "../store/product";

function CreatePage() {
  const theme = useTheme();
  const { createProduct } = useProductStore();

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // ou "error"
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    setSnackbar({
      open: true,
      message: message,
      severity: success ? "success" : "error",
    });

    if (success) {
      setNewProduct({ name: "", price: "", image: "" });
    }
  };

  return (
    <Container maxWidth="sm" disableGutters>
      <Stack spacing={5}>
        <Typography
          sx={{
            width: "100%",
            color: theme.palette.text.primary,
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: 32, sm: 38 },
            p: 1,
          }}
        >
          Novo Produto
        </Typography>

        <Box
          width="100%"
          sx={{
            bgcolor: theme.palette.background.paper,
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Stack spacing={3}>
            <TextField
              label="Nome do produto"
              name="name"
              fullWidth
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />

            <TextField
              label="Preço"
              name="price"
              type="number"
              fullWidth
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />

            <TextField
              label="URL da imagem"
              name="image"
              fullWidth
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleAddProduct}
            >
              Adicionar Produto
            </Button>
          </Stack>
        </Box>
      </Stack>

      {/* Snackbar para feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default CreatePage;
