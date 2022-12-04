import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player('iframe');

const onPlay = function (data) {
  
};

player.on('play', onPlay);




/* player.on('timeupdate', function (data) {
  console.log(timeupdate);
  // data is an object containing properties specific to that event
}); */


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
