export default defineNuxtPlugin((nuxt) => {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  nuxt.youtubeAPIReady = false;
  nuxt.players = [];

  window.onYouTubeIframeAPIReady = () => {
    nuxt.youtubeAPIReady = true;
  };

  nuxt.createYouTubePlayer = (elementId, options = {}) => {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (nuxt.youtubeAPIReady) {
          clearInterval(interval);
          const player = new YT.Player(elementId, {
            height: "360",
            width: "640",
            ...options,
          });
          nuxt.players.push(player);
          resolve(player);
        }
      }, 100);
    });
  };

  nuxt.pauseAll = () => {
    nuxt.players.forEach((player) => {
      player.pauseVideo();
    });
  };
  nuxt.playAll = () => {
    nuxt.players.forEach((player) => {
      player.playVideo();
    });
  };
  nuxt.stopAll = () => {
    nuxt.players.forEach((player) => {
      player.stopVideo();
    });
  };
});
