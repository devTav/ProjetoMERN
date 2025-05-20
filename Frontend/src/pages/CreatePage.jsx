import { Container, Typography, Box, Stack, TextField, Button } from '@mui/material';
import React, { useState } from 'react'

function CreatePage() {

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProduct = () => {
    console.log('console.log handleAddProduct')
  }

  return (
    <Container maxWidth="sm">
      <Stack spacing={8}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Criar novo produto
        </Typography>

        <Box
          width="100%"
          sx={{
            bgcolor: '#13002c',
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
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />

            <TextField
              label="Preço"
              name="price"
              type="number"
              fullWidth
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />

            <TextField
              label="URL da imagem"
              name="image"
              fullWidth
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
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
    </Container>
  );
};

export default CreatePage