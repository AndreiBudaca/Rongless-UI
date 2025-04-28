import { Button } from "@mui/material";
import { useState } from "react";
import YouTube, { type YouTubeEvent } from "react-youtube";

export interface SongGuessrProps {
  videoId: string;
}

export function SongGuessr({ videoId }: SongGuessrProps) {
  const [player, setPlayer] = useState<YouTubeEvent | null>(null);
  const [playTime, setPlayTime] = useState(5);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const play = () => {
    player?.target.playVideo();
    const startTime = player?.target.getCurrentTime();
    const endTime = startTime + playTime;
    setIsPlaying(true);

    const checkInterval = setInterval(function () {
      const currentTime = player?.target.getCurrentTime();

      if (currentTime >= endTime) {
        player?.target.stopVideo();
        clearInterval(checkInterval);
        setIsPlaying(false);
      }
    }, 10);
  };

  const pause = () => {
    if (isPaused) {
      player?.target.playVideo();
      setIsPaused(false);
    } else {
      player?.target.pauseVideo();
      setIsPaused(true);
    }
  }

  return (
    <>
      {isPlaying ? (
        <Button onClick={pause}>{isPaused ? "Resume" : "Pause"}</Button>
      ) : (
        <Button onClick={play}>Play</Button>
      )}
      <YouTube
        videoId={videoId}
        style={{ display: "none" }}
        id="youtube-player"
        onReady={(e) => setPlayer(e)}
      />
    </>
  );
}
