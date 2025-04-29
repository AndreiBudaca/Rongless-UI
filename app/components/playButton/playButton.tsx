import { Box, IconButton } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import YouTube, { YouTubeEvent } from "react-youtube";
import { play, pause, resume } from "../../services/youtubeService";

export interface PlayButtonProps {
  videoId: string;
  playTime: number;
  setProgress: (progress: number) => void;
}

export function PlayButton({
  videoId,
  playTime,
  setProgress,
}: PlayButtonProps) {
  const [showPlayer, setShowPlayer] = useState(false);
  const [player, setPlayer] = useState<YouTubeEvent | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPlayer(true);
    }, 100);
  }, []);

  const buttonClick = useCallback(() => {
    if (player === null) return;

    if (!isPlaying) return play(player, playTime, setIsPlaying, setProgress);
    if (isPaused) return resume(player, setIsPaused);
    return pause(player, setIsPaused);
  }, [isPlaying, isPaused, player]);

  const buttonIcon = useMemo(() => {
    if (player === null) return <HourglassBottomIcon />;
    if (isPlaying && !isPaused) return <PauseIcon />;
    return <PlayArrowIcon />;
  }, [isPlaying, isPaused, player]);

  return (
    <Box display="flex" justifyContent="center">
      <IconButton
        sx={{
          borderRadius: "99999999px",
          width: "50px",
          height: "50px",
          backgroundColor: "#55b725",
          padding: "0px",

          ":hover": {
            backgroundColor: "#55b725",
          },
        }}
        onClick={buttonClick}
        children={buttonIcon}
      ></IconButton>

      {showPlayer && (
        <YouTube
          videoId={videoId}
          style={{ display: "none" }}
          id="youtube-player"
          onReady={(e) => {
            if (e !== null) setPlayer(e);
          }}
        />
      )}
    </Box>
  );
}
