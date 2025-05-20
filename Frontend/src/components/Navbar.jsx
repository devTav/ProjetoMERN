import { Container, Typography, Box, Stack, Button } from '@mui/material';
import { CiSquarePlus } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ xs: 'column', sm: 'row' }}
        height={64}
      >
        <Typography
          sx={{
            background: 'linear-gradient(90deg, #ff6a00, #ee0979)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: { xs: 22, sm: 28 },
          }}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
              Produtos 🛒
          </Link>
        </Typography>
        
        <Stack spacing={2} alignItems={"center"} direction={'row'}> 
          <Link to="/create" style={{ textDecoration: 'none' }}>
            <Button>
              <CiSquarePlus fontSize={20}/> 
            </Button>  
          </Link>

          <Button>
            <MdDarkMode fontSize={20}/>
          </Button>

        </Stack>        

      </Box>
    </Container>
  );
};

export default Navbar;
