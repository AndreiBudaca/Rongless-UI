import { Box } from "@mui/material";
import { CategoryOption } from "./categoryOption";
import { useState } from "react";

export interface CategorySelectorProps {
  options: string[];
}

export function CategorySelector({ options }: CategorySelectorProps) {
  const [selectedOption, setSelectedOption] = useState(options.length > 0 ? options[0] : "");

  return (
    <Box width="100%" display="flex" justifyContent="center">
      {options.map((o) => (
        <CategoryOption
          optionName={o}
          isSelected={o === selectedOption}
          onClick={(option) => setSelectedOption(option)}
          key={o}
        />
      ))}
    </Box>
  );
}
