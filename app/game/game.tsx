import React, { useState } from "react";
import { Box } from "@mui/material";
import { Title } from "~/components/title/title";
import { CategorySelector } from "~/components/categorySlector/categorySelector";
import { PlayButton } from "~/components/playButton/playButton";
import { ProgressBar } from "~/components/progressBar/progressBar";
import { GuessesList } from "~/components/guesesList/guessesList";
import { GuessBar } from "~/components/guessBar/guessBar";

export const MAX_PLAY_TIME = 30;

export function Game() {
  const [songProgress, setSongProgress] = useState(0);
  const [phaseMaxProgress, setPhaseMaxProgress] = useState(5);

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
        <CategorySelector options={["test", "test2", "test3"]} />
        <GuessesList
          guesses={[
            { guess: "Jhon Bandera - Mama mea e florareasa", type: "wrong" },
            { guess: "Elton Jhon - La inima mi-am pus lacat", type: "wrong" },
            { guess: "Hannah Montana - Dor de tine", type: "wrong" },
            { guess: "Jill Dobrica - HITS", type: "correct" },
            { guess: null, type: "none" },
            { guess: null, type: "none" },
          ]}
        />
        <ProgressBar
          progress={(songProgress * 100) / MAX_PLAY_TIME}
          maxProgress={(phaseMaxProgress * 100) / MAX_PLAY_TIME}
        />
        <PlayButton
          videoId={"dQw4w9WgXcQ"}
          playTime={phaseMaxProgress}
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
        />
      </Box>
    </Box>
  );
}
