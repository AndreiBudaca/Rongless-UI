import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Title } from "~/components/title/title";
import { CategorySelector } from "~/components/categorySlector/categorySelector";
import { PlayButton } from "~/components/playButton/playButton";
import { ProgressBar } from "~/components/progressBar/progressBar";
import {
  GuessesList,
  GuessesListProps,
} from "~/components/guesesList/guessesList";
import { GuessBar, GuessBarOption } from "~/components/guessBar/guessBar";
import { GuessesContainerProps } from "~/components/guesesList/guessContainer";
import { DailyVideo, GetDailySongs, GetSongs } from "~/services/guessService";
import { EndModal } from "~/components/modals/endModal";

export const MAX_PLAY_TIME = 30;
export const MAX_PHASES = 6;
export const PHASE_TIMES = [0.5, 1, 2, 4, 8, 15, 30];

export interface GameProps {
  unlimited: boolean;
}

export function Game({ unlimited }: GameProps) {
  const [songProgress, setSongProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [guesses, setGuesses] = useState<GuessesListProps>({
    guesses: [
      { guess: null, type: "none" },
      { guess: null, type: "none" },
      { guess: null, type: "none" },
      { guess: null, type: "none" },
      { guess: null, type: "none" },
      { guess: null, type: "none" },
    ],
  });
  const [video, setVideo] = useState<DailyVideo | null>(null);
  const [videoList, setVideoList] = useState<GuessBarOption[]>([]);
  const [gameState, setGameState] = useState<"play" | "win" | "lose" | "end">(
    "play"
  );

  if (unlimited && gameState == "end") window.location.reload();

  useEffect(() => {
    const fetchData = async () => {
      const videos = await GetSongs();

      setVideoList(
        videos.videos.map((v, i) => {
          return { value: v.video_id, label: v.video_title };
        })
      );

      if (!unlimited) {
        const daily = await GetDailySongs();
        setVideo(daily);
      } else {
        const randomVideoIndex = Math.round(
          (videos.videos.length - 1) * Math.random()
        );
        setVideo({ date: new Date(), video: videos.videos[randomVideoIndex] });
      }
    };

    fetchData();
  }, []);

  const makeGuess = (value: string, label: string) => {
    if (phase >= MAX_PHASES || gameState !== "play") return;

    const isCorrectGuess = value === video?.video.video_id;

    const newGuess: GuessesContainerProps = {
      guess: label,
      type: isCorrectGuess ? "correct" : "wrong",
    };
    guesses.guesses[phase] = newGuess;
    setGuesses({ guesses: [...guesses.guesses] });
    setPhase(phase + 1);

    if (isCorrectGuess) {
      setGameState("win");
    } else if (phase == MAX_PHASES - 1) {
      setGameState("lose");
    }
  };

  return (
    <Box display="flex" justifyContent="center" height="100vh">
      <Box
        id="mainConter"
        maxWidth="600px"
        width="100%"
        display="flex"
        flexDirection="column"
        gap="25px"
      >
        <Title />
        <CategorySelector options={["Muzica de petrecere"]} />
        <GuessesList guesses={guesses.guesses} />
        <ProgressBar
          progress={(songProgress * 100) / MAX_PLAY_TIME}
          maxProgress={(PHASE_TIMES[phase] * 100) / MAX_PLAY_TIME}
        />
        <PlayButton
          videoId={video?.video.video_id ?? ""}
          playTime={PHASE_TIMES[phase]}
          setProgress={(progress: number) => setSongProgress(progress)}
        />
        <GuessBar
          possibleGuesses={videoList}
          onValueSelected={makeGuess}
          disabled={gameState === "end"}
        />
      </Box>

      <EndModal
        open={gameState === "win" || gameState === "lose"}
        videoName={video?.video.video_title ?? ""}
        onClose={() => setGameState("end")}
        condition={gameState === "win" ? "win" : "loose"}
      />
    </Box>
  );
}
