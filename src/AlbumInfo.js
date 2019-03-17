const renderAlbumInfo2 = (data, element) => {
  const markup = `
    <img class="album-image" src="${data.images[0].url}" alt="${data.name}">
    <p class="album-title">${data.name}</p>
    <p class="album-artist">${data.artists[0].name}</p>
    <p class="album-counter">${data.tracks.total} Songs</p>
  `;
  const newElement = element;
  newElement.innerHTML = markup;
  return data;
};

export default renderAlbumInfo2;
