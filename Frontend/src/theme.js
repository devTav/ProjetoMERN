import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5",
    },
    primary: {
      main: "#1976d2",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0d1117", // fundo da página
      paper: "#161b22"    // cards, boxes, formularios
    },
    primary: {
      main: "#58a6ff"     // botão azul claro
    },
  },
});
