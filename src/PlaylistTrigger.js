const albumMusics = document.getElementById('album-musics');
let audioObject = null;

const playlistTrigger = () => {
  albumMusics.addEventListener('click', (event) => {
    const target = event.target.parentNode;
    if (target.classList.contains('active')) {
      audioObject.pause();
    } else {
      if (audioObject) {
        audioObject.pause();
      }
      audioObject = new Audio(target.getAttribute('data-track-preview'));
      audioObject.play();
      target.classList.add('active');

      audioObject.addEventListener('ended', () => {
        target.classList.remove('active');
      });

      audioObject.addEventListener('pause', () => {
        target.classList.remove('active');
      });
    }
  });
};

export default playlistTrigger;
