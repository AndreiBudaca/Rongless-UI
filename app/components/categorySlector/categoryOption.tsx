import { Button } from "@mui/material";

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
  const selectedSx = isSelected ? { backgroundColor: "#FFFFFF55" } : {};

  return <Button sx={{
    color: "white",
    padding: "10px",
    borderRadius: "0px",
    ...selectedSx,
  }} onClick={() => onClick(optionName)}>{optionName}</Button>;
}
