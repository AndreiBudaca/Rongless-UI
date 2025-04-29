import { Box } from "@mui/material";

export interface GuessesContainerProps {
  guess: string | null;
  type: "correct" | "wrong" | "none";
}

export function GuessesContainer({ guess, type }: GuessesContainerProps) {
  const backgroundColor = type === "correct" ? "#55b725" :
    type === "wrong" ? "#e23d3d" : "none"
  const borderColor = type === "none" ? "#5f686d" : "none";
  
  return (
    <Box
      border={`2px solid ${borderColor}`}
      height="50px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      fontSize="22px"
      fontFamily="console"
      borderRadius="5px"
      sx={{
        backgroundColor: {backgroundColor}
      }}
    >
      {guess}
    </Box>
  );
}
