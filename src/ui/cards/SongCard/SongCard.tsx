import { useEffect, useState } from 'react';
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

export interface SongCardProps {
  data: Song;
  addCta: (id: string) => void;
  removeCta: (id: string) => void;
  defaultFavorite?: boolean;
}

const SongCard: React.FC<SongCardProps> = ({
  data: { artistName, cover, duration, id, name },
  addCta,
  removeCta,
  defaultFavorite,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    const newIsFavorite = !isFavorite;

    setIsFavorite(newIsFavorite);

    newIsFavorite ? addCta(id) : removeCta(id);
  };

  useEffect(() => {
    setIsFavorite(!!defaultFavorite);
  }, [defaultFavorite]);

  return (
    <Card>
      <CardMedia
        component="img"
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
