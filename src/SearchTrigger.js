import spotify from './Spotify';
import renderAlbums from './AlbumList';

const albumList = document.getElementById('album-list');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

const searchEnterTrigger = () => {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    spotify.search.albums(searchInput.value)
      .then(data => renderAlbums(data.albums.items, albumList));
  });
};

export default searchEnterTrigger;
