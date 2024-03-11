import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from '@mui/icons-material';
import { RoutePaths } from '@/router';
import { Song } from '@/types';

export interface SongCardProps {
  data: Song;
  addCta: (id: string) => void;
  removeCta: (id: string) => void;
  defaultFavorite?: boolean;
}

const SongCard: React.FC<SongCardProps> = ({
  data: { artistId, artistName, cover, duration, id, name },
  addCta,
  removeCta,
  defaultFavorite,
}) => {
  const [isFavorite, setIsFavorite] = useState(defaultFavorite);

  const handleFavoriteClick = () => {
    const newIsFavorite = !isFavorite;

    setIsFavorite(newIsFavorite);

    newIsFavorite ? addCta(id) : removeCta(id);
  };

  return (
    <Card sx={{ display: 'flex', width: '100%' }}>
      <CardActions>
        <IconButton onClick={handleFavoriteClick}>
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
      <CardMedia
        component="img"
        height="128"
        image={cover}
        title={name}
        alt={`${cover} song cover`}
        style={{ objectFit: 'contain', width: 'auto' }}
      />
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          flex: 1,
          padding: 2,
          '&:last-child': {
            padding: 2,
          },
        }}
      >
        <Box flex={1}>
          <Typography gutterBottom variant="h5" component="h1" title={name}>
            {name}
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            to={`/${RoutePaths.ARTIST}/${artistId}`}
            color="text.secondary"
            title={artistName}
            sx={{
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {artistName}
          </Typography>
        </Box>
        <Box px={2}>
          <Typography variant="body1" component="h3" color="text.secondary">
            {duration}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SongCard;
