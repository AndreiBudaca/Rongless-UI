import { Box } from "@mui/material";
import Select from "react-select";

export interface GuessBarProps {
  possibleGuesses: {
    value: string;
    label: string;
  }[];
}

export function GuessBar({ possibleGuesses }: GuessBarProps) {
  return (
    <Box>
      <Select
        options={possibleGuesses}
        placeholder={"Guess the song"}
        value={null}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "#00000000",
          }),
          input: (baseStyles, state) => ({
            ...baseStyles,
            color: "white",
            fontFamily: "console",
          }),
          placeholder: (baseStyles, state) => ({
            ...baseStyles,
            color: "#FFFFFFAA",
          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "#00000000",
            color: "white"
          }),
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary25: "#000000",
            primary50: "#00000033"
          },
        })}
      />
    </Box>
  );
}
