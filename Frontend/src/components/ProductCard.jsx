import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProductStore } from "../store/product";
import { useState } from "react";
import MuiAlert from "@mui/material/Alert";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    setSnackbar({
      open: true,
      message,
      severity: success ? "success" : "error",
    });
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    setOpenDialog(false);
    setSnackbar({
      open: true,
      message: success ? "Product updated successfully" : message,
      severity: success ? "success" : "error",
    });
  };

  return (
    <>
      <Card
        elevation={4}
        sx={{
          maxWidth: 345,
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 6,
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
            ${product.price}
          </Typography>
          <Box display="flex" gap={1}>
            <IconButton color="primary" onClick={() => setOpenDialog(true)}>
              <EditIcon />
            </IconButton>
            <IconButton color="error" onClick={() => handleDeleteProduct(product._id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
        <DialogTitle>Update Product</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            Edit the fields below and click "Update" to save changes.
          </DialogContentText>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Product Name"
              value={updatedProduct.name}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
              fullWidth
            />
            <TextField
              label="Price"
              type="number"
              value={updatedProduct.price}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
              fullWidth
            />
            <TextField
              label="Image URL"
              value={updatedProduct.image}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleUpdateProduct(product._id, updatedProduct)} variant="contained">
            Update
          </Button>
          <Button onClick={() => setOpenDialog(false)} variant="outlined">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default ProductCard;

//1:43:03 