import {
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
import { Song } from '@/types';
import { useState } from 'react';

export interface SongCardProps {
  data: Song;
}

const SongCard: React.FC<SongCardProps> = ({
  data: { artistName, cover, duration, name },
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        width="240"
        image={cover}
        title={name}
        style={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="body2"
          component="h1"
          title={name}
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          color="text.secondary"
          title={name}
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {artistName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {duration}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleFavoriteClick}>
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default SongCard;
