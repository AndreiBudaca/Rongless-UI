import { Box } from "@mui/material";
import Select from "react-select";

export interface GuessBarProps {
  possibleGuesses: GuessBarOption[];
  onValueSelected: (value: string, label: string) => void;
  disabled: boolean;
}

export interface GuessBarOption {
  value: string;
  label: string;
}

export function GuessBar({ possibleGuesses, onValueSelected, disabled }: GuessBarProps) {
  return (
    <Box>
      <Select
        options={possibleGuesses}
        placeholder={"Guess the song"}
        value={null}
        menuPlacement="top"
        openMenuOnClick={false}
        isDisabled={disabled}
        onChange={(newValue) => onValueSelected(newValue!.value, newValue!.label)}
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
            backgroundColor: "#222222",
            color: "white",
          }),
          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            display: "none",
          }),
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary25: "#000000",
            primary50: "#00000033",
          },
        })}
      />
    </Box>
  );
}
