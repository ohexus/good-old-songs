import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { RoutePaths } from '@/router';
import { Artist } from '@/types';

export interface ArtistCardProps {
  data: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({
  data: { avatar, id, name, songsCount },
}) => (
  <Link to={`${RoutePaths.ARTIST}/${id}`} style={{ textDecoration: 'none' }}>
    <Card>
      <CardMedia component="img" image={avatar} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h1">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Songs: {songsCount}
        </Typography>
      </CardContent>
    </Card>
  </Link>
);

export default ArtistCard;
