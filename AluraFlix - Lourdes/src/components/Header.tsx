import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onOpenNewVideo: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenNewVideo }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#040C2A' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontSize: 30 }}>
            ALURAFLIX
          </Typography>
          <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{
              borderRadius: '20px',
              marginLeft: '10px',
              padding: '8px 16px',
              fontWeight: 'bold',
              textTransform: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            Home
          </Button>
          <Button
            onClick={onOpenNewVideo}
            color="inherit"
            sx={{
              borderRadius: '20px',
              marginLeft: '10px',
              padding: '8px 16px',
              fontWeight: 'bold',
              textTransform: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            Nuevo Video
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
