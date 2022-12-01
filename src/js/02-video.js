import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

/* const player = new Player('iframe', {}); */

iframe.addEventListener('timeupdate', event => {
  console.log('The currentTime attribute has been updated. Again.');
});

/* player.on('eventName', function (data) {
  // data is an object containing properties specific to that event
  localStorage.setItem("timeupdate");
}); */

/* const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
 */

/* const onPlay = function (data) {
  // data is an object containing properties specific to that event
  onPlay.addEventListener('timeupdate', e => {
    console.log('iframe', e.target.value);
  });
};

player.on('play', onPlay);


player.on('timeupdate', function (data) {
  console.log(timeupdate);
  // data is an object containing properties specific to that event
});
 */

/* player
  .setCurrentTime()
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  }); */
