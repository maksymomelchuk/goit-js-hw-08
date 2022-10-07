import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_KEY));

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', throttle(rememberPlaceToStartVideo, 1000));

function rememberPlaceToStartVideo(event) {
  localStorage.setItem(LOCAL_STORAGE_KEY, event.seconds);
  console.log(event.seconds);
}
