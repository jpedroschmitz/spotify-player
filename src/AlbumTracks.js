import convertToHumanTime from './ConvertTime';

function createMarkup(tracks) {
  return tracks.map(track => `
    <div class="music" data-track-preview="${track.preview_url}">
      <p class="music-number">${track.track_number}</p>
      <p class="music-title">${track.name}</p>
      <p class="music-duration">${convertToHumanTime(track.duration_ms)}</p>
    </div>`).join('');
}

const renderAlbumTracks = (data, element) => {
  const newElement = element;
  const markup = createMarkup(data);
  newElement.innerHTML = markup;
};

export default renderAlbumTracks;
