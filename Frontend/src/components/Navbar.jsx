import { Container, Typography, Box, Stack, Button } from '@mui/material';
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <Box width="100%">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ xs: 'column', sm: 'row' }}
        height={64}
        width="100%"
      >
        <Typography
          sx={{
            background: 'linear-gradient(90deg, #ff6a00, #ee0979)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'right',
            fontSize: { xs: 32, sm: 38 },
            p: 2
          }}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            Produtos 🛒
          </Link>
        </Typography>

        <Stack spacing={2} alignItems={"center"} direction={'row'} p={2}>
          <Link to="/create" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: '#ee0979' }}>
              <CiSquarePlus fontSize={35} />
            </Button>
          </Link>

          <Button onClick={toggleTheme} sx={{ color: '#ee0979' }}>
            {isDarkMode ? (
              <MdOutlineLightMode fontSize={30} />
            ) : (
              <MdOutlineDarkMode fontSize={30} />
            )}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
