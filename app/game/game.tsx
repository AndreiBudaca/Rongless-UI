import React from "react";
import { Box } from "@mui/material";
import { Title } from "~/components/title/title";
import { CategorySelector } from "~/components/categorySlector/categorySelector";
import { SongGuessr } from "~/components/songGuessr/songGuessr";

export function Game() {
  return (
    <Box display="flex" justifyContent="center" height="100vh" sx={{backgroundColor: "#161819"}}>
      <Box id="mainConter" maxWidth="60vw">
        <Title />
        <CategorySelector options={["test", "test2", "test3"]}/>
        <SongGuessr videoId="dQw4w9WgXcQ" />
      </Box>
    </Box>
  );
}
