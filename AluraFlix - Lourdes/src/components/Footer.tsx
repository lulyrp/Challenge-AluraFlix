import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      bgcolor: '#1E2A47',  
      color: '#FFFFFF',  
      padding: 3,  
      textAlign: 'center',
      borderTop: '5px solidrgb(11, 8, 194)',  
      boxShadow: '0px -4px 10px rgba(25, 9, 255, 0.82)',  
    }}
  >
    <Typography
      variant="body2"
      sx={{
        fontSize: 16,  
        fontWeight: 'bold',  
        letterSpacing: 1.2,  
        textTransform: 'uppercase',  
      }}
    >
      Challenge AluraFlix © 2025 | Desarrolladora Lourdes Rebolledo Pereyra
    </Typography>
  </Box>
);

export default Footer;
