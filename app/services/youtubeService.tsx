import { YouTubeEvent } from "react-youtube";

export const play = (
  player: YouTubeEvent,
  playTime: number,
  setPlaying: (state: boolean) => void,
  setProgress: (progress: number) => void
) => {
  player.target.playVideo();
  const startTime = player.target.getCurrentTime();
  const endTime = startTime + playTime;
  setPlaying(true);
  
  const checkInterval = setInterval(function () {
    const currentTime = player.target.getCurrentTime();
    setProgress(currentTime);

    if (currentTime >= endTime) {
      player?.target.stopVideo();
      clearInterval(checkInterval);
      setPlaying(false);
    }
  }, 10);
};

export const pause = (
  player: YouTubeEvent,
  setPaused: (state: boolean) => void
) => {
  player.target.pauseVideo();
  setPaused(true);
};

export const resume = (
  player: YouTubeEvent,
  setPaused: (state: boolean) => void
) => {
  player.target.playVideo();
  setPaused(false);
};
