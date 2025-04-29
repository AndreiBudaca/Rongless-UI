import { Box } from "@mui/material";
import { GuessesContainer } from "./guessContainer";

export interface GuessesListProps {
  guesses: {
    guess: string | null;
    type: "correct" | "wrong" | "none";
  }[];
}

export function GuessesList({ guesses }: GuessesListProps) {
  return <Box display="flex" flexDirection="column" gap="15px">
    {guesses.map((g, i) => <GuessesContainer guess={g.guess} type={g.type} key={i} />)}
  </Box>
}
