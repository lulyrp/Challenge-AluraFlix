import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import YouTubePlayer from './YoutubePlayer';

interface CardVideoProps {
  video: {
    id: number; 
    title: string;
    videoUrl: string;
    category: string;
    imageUrl: string;
    description: string;
  };
  onEdit: (video: {
    id: number;
    title: string;
    videoUrl: string;
    category: string;
    imageUrl: string;
    description: string;
  }) => void; 
  onDelete: (id: number) => void; 
}

const CardVideo: React.FC<CardVideoProps> = ({ video, onEdit, onDelete }) => {
  const [open, setOpen] = useState(false); 
  const [videoUrl, setVideoUrl] = useState(''); 
  const [confirmOpen, setConfirmOpen] = useState(false); 

  const handleCardClick = (urlVideo: string) => {
    setVideoUrl(urlVideo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setVideoUrl('');
  };

  const handleConfirmOpen = () => {
    setConfirmOpen(true); 
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false); 
  };

  const handleDelete = () => {
    onDelete(video.id); 
    handleConfirmClose(); 
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          margin: 2,
          position: 'relative',
          height: 'auto', 
          borderRadius: '20px', 
          overflow: 'hidden',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', 
          border: '4px double #333', 
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transiciones suaves
          '&:hover': {
            transform: 'scale(1.05)', 
            boxShadow: '0px 8px 40px rgba(0, 0, 0, 0.3)', // Sombra más grande al tocar
          },
        }}
      >
        {/* Encabezado con imagen */}
        <Box
          onClick={() => handleCardClick(video.videoUrl)}
          sx={{
            cursor: 'pointer',
            position: 'relative',
            height: '180px', // Altura fija de la imagen
            backgroundImage: `url(${video.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Typography
            sx={{
              position: 'absolute',
              bottom: 8,
              left: 10,
              color: '#900',
              backgroundColor: 'rgba(233, 224, 140, 0.7)',
              padding: '5px 10px',
              borderRadius: '4px',
            }}
            variant="body2"
          >
            {video.category}
          </Typography>
        </Box>
        <Box
          onClick={() => handleCardClick(video.videoUrl)}
          sx={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#ffff',
            opacity: 0.8,
            '&:hover': {
              opacity: 1,
            },
            cursor: 'pointer',
          }}
        >
          <PlayCircleOutlineIcon sx={{ fontSize: 60 }} />
        </Box>
        {/* Contenido de la tarjeta */}
        <CardContent sx={{ paddingBottom: '10px', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <Tooltip title={video.title} arrow>
            <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
              {video.title.slice(0, 30)}
              {video.title.length > 30 ? '...' : ''}
            </Typography>
          </Tooltip>
          <Tooltip title={video.description} arrow>
            <Typography variant="body2" color="white">
              {video.description.slice(0, 80)}
              {video.description.length > 80 ? '...' : ''}
            </Typography>
          </Tooltip>
        </CardContent>

        {/* Acciones (botones) */}
        <CardActions
          sx={{
            justifyContent: 'space-between',
            borderTop: '1px solid #e0e0e0',
            padding: '10px 16px',
            backgroundColor: 'gray', 
            marginTop: 'auto', 
          }}
        >
          <Button
            size="small"
            sx={{
              color: 'rgb(137, 245, 155)',
              fontWeight: 'bold',
              textDecoration: 'underline', 
              '&:hover': { backgroundColor: 'rgb(4 12 42 / 30%)' },
            }}
            onClick={() => onEdit(video)}
          >
            Editar
          </Button>
          <Button
            size="small"
            sx={{
              color: 'maroon',
              fontWeight: 'bold',
              textDecoration: 'underline', 
              '&:hover': { backgroundColor: 'rgb(244 67 54 / 30%)' },
            }}
            onClick={handleConfirmOpen} 
          >
            Eliminar
          </Button>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <YouTubePlayer videoUrl={videoUrl} onClose={handleClose} />
      </Dialog>
      <Dialog open={confirmOpen} onClose={handleConfirmClose}>
        <DialogTitle>¿Estás seguro?</DialogTitle>
        <DialogContent>
          <Typography>
            ¿Seguro que deseas eliminar este video"<strong>{video.title}</strong>"?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CardVideo;
