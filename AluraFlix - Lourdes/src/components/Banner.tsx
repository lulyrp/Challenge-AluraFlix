import React, { useState } from 'react';
import { Box, Typography, Card, Dialog } from '@mui/material';
import bannerImg from '../assets/img/banner.png'; 
import imageCard from '../assets/img/player.png'; 
import ReactPlayer from 'react-player'; 
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Banner: React.FC = () => {
    const [open, setOpen] = useState(false); 
    const [videoUrl, setVideoUrl] = useState(''); 
    
    const handleCardClick = () => {
        setVideoUrl('https://www.youtube.com/watch?v=ov7vA5HFe6w&ab_channel=AluraLatam');
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setVideoUrl(''); // Limpia la URL del video
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: '450px', sm: '350px', md: '400px' },
                backgroundImage: `url(${bannerImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', md: 'row' },
                position: 'relative',
                padding: { xs: '20px', md: '20px' },
                borderRadius: '15px',
                boxShadow: '0px 4px 30px rgba(25, 9, 255, 0.82)',
            }}
        >
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, marginLeft: { md: '70px' }, marginBottom: { xs: '16px', md: '0' }, padding: { xs: '16px', md: '16px' } }}>
                <Typography
                    variant="h5"
                    sx={{
                        backgroundColor: '#FF7043',
                        color: 'white',
                        padding: '7px 10px',
                        borderRadius: '8px',
                        display: 'inline-block',
                        marginBottom: '16px',
                    }}
                >
                    FRONT END
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginBottom: '16px',
                        fontSize: { xs: '2rem', md: '3rem' },
                        textShadow: '2px 2px 10px rgba(0,0,0,0.8)',
                    }}
                >
                    Challenge React
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'white',
                        maxWidth: '500px',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        margin: '0 auto',
                        letterSpacing: '1px',
                    }}
                >
                    Este challenge es una forma de aprendizaje. Es un mecanismo donde
                    podrás comprometerte en la resolución de un problema para poder
                    aplicar todos los conocimientos adquiridos en la formación React.
                </Typography>
            </Box>

            <Card
                sx={{
                    cursor: 'pointer',
                    width: { xs: '90%', sm: '600px' },
                    position: 'relative',
                    top: { xs: '0', md: 'unset' },
                    right: { xs: '0', md: '210px' },
                    borderRadius: '15px',
                    boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.3)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0px 10px 50px rgba(0, 0, 0, 0.4)',
                    },
                    marginBottom: { xs: '16px', md: '0' },
                }}
                onClick={handleCardClick}
            >
                <Box
                    component="img"
                    src={imageCard}
                    alt="Miniatura"
                    sx={{
                        width: '100%',
                        height: { xs: '200px', sm: '295px' },
                        objectFit: 'cover',
                        borderRadius: '15px',
                    }}
                />
                <Box
                    onClick={() => handleCardClick()}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#fff',
                        opacity: 0.8,
                        '&:hover': {
                            opacity: 1,
                        },
                        cursor: 'pointer',
                    }}
                >
                    <PlayCircleOutlineIcon sx={{ fontSize: 70, transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.2)' } }} />
                </Box>
            </Card>

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <ReactPlayer url={videoUrl} playing controls width="100%" height="100%" />
            </Dialog>
        </Box>
    );
};

export default Banner;
