import React, { useState } from "react";
import { Box } from "@mui/material";
import { Title } from "~/components/title/title";
import { CategorySelector } from "~/components/categorySlector/categorySelector";
import { PlayButton } from "~/components/playButton/playButton";
import { ProgressBar } from "~/components/progressBar/progressBar";
import {
  GuessesList,
  GuessesListProps,
} from "~/components/guesesList/guessesList";
import { GuessBar } from "~/components/guessBar/guessBar";
import { GuessesContainerProps } from "~/components/guesesList/guessContainer";

export const MAX_PLAY_TIME = 30;
export const MAX_PHASES = 6;
export const PHASE_TIMES = [0.5, 1, 2, 4, 8, 15, 30];

export function Game() {
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

  const makeGuess = (value: string) => {
    const newGuess: GuessesContainerProps = { guess: value, type: "wrong" };
    guesses.guesses[phase] = newGuess;
    setGuesses({ guesses: [...guesses.guesses] });
    setPhase(phase + 1);
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
        <CategorySelector options={["Muzica de petrece"]} />
        <GuessesList guesses={guesses.guesses} />
        <ProgressBar
          progress={(songProgress * 100) / MAX_PLAY_TIME}
          maxProgress={(PHASE_TIMES[phase] * 100) / MAX_PLAY_TIME}
        />
        <PlayButton
          videoId={"dQw4w9WgXcQ"}
          playTime={PHASE_TIMES[phase]}
          setProgress={(progress: number) => setSongProgress(progress)}
        />
        <GuessBar
          possibleGuesses={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" },
            { value: "mint", label: "Mint" },
            { value: "caramel", label: "Caramel" },
            { value: "coffee", label: "Coffee" },
            { value: "banana", label: "Banana" },
            { value: "blueberry", label: "Blueberry" },
            { value: "lemon", label: "Lemon" },
            { value: "raspberry", label: "Raspberry" },
            { value: "peach", label: "Peach" },
            { value: "mango", label: "Mango" },
            { value: "coconut", label: "Coconut" },
            { value: "pineapple", label: "Pineapple" },
            { value: "hazelnut", label: "Hazelnut" },
            { value: "almond", label: "Almond" },
            { value: "blackberry", label: "Blackberry" },
            { value: "grape", label: "Grape" },
            { value: "orange", label: "Orange" },
            { value: "watermelon", label: "Watermelon" },
          ]}
          onValueSelected={makeGuess}
        />
      </Box>
    </Box>
  );
}
