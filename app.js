// Replace YOUR_API_KEY with your actual YouTube Data API key
const API_KEY = 'YOUR_API_KEY';
const VIDEO_ID = 'YOUR_UNLISTED_VIDEO_ID';

// Load YouTube IFrame Player API asynchronously
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

// Callback function called when the API is loaded
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: VIDEO_ID,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Callback function called when the player is ready
function onPlayerReady(event) {
    event.target.playVideo();
}

// Callback function called when the player's state changes
function onPlayerStateChange(event) {
    // You can implement additional functionality here if needed
}

// Replace 'YOUR_API_KEY' with your actual YouTube Data API key
function getYouTubeVideoDetails(videoId) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const videoTitle = data.items[0].snippet.title;
            console.log(`Video Title: ${videoTitle}`);
        })
        .catch(error => console.error('Error fetching video details:', error));
}
