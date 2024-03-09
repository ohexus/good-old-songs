import { useParams } from 'react-router-dom';

const Artist = () => {
  const { artistId } = useParams();

  return (
    <div>
      <h1>Artist</h1>
      <p>ID: {artistId}</p>
    </div>
  );
};

export default Artist;
