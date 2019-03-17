import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const listAlbums = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumMusics = document.getElementById('album-musics');

const makeRequest = (album) => {
  spotify.album.getAlbum(album)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, albumMusics));
};

const selectAlbumTrigger = () => {
  listAlbums.addEventListener('click', (event) => {
    const { target } = event;
    makeRequest(target.getAttribute('data-album-id'));
  });
};

export default selectAlbumTrigger;
