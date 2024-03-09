import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../../router';
import { Artist } from '../../../../types';

const ArtistCard: React.FC<Artist> = ({ avatar, id, name, songsCount }) => (
  <Link to={`${RoutePaths.ARTIST}/${id}`} style={{ textDecoration: 'none' }}>
    <Card>
      <CardHeader
        avatar={
          <Avatar src={avatar} alt={name} />
        }
        title={name}
      />
      <CardContent>
        <Typography variant="body2">Songs: {songsCount}</Typography>
      </CardContent>
    </Card>
  </Link>
);

export default ArtistCard;
