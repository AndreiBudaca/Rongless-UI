import { Box, Button } from "@mui/material";

export interface CategoryOptionProps {
  optionName: string;
  isSelected: boolean;
  onClick: (option: string) => void
}

export function CategoryOption({
  optionName,
  isSelected,
  onClick
}: CategoryOptionProps) {
  const selectedSx = isSelected ? { backgroundColor: "#FFFFFF11" } : {};

  const boxSx = {
    color: "white",
    padding: "10px",
    borderRadius: "0px",
    ...selectedSx,
  };

  return <Button sx={boxSx} onClick={() => onClick(optionName)}>{optionName}</Button>;
}
