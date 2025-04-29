import { Box, LinearProgress } from "@mui/material";

export interface ProgressBarProps {
  progress: number;
  maxProgress: number;
}

export function ProgressBar({ progress, maxProgress }: ProgressBarProps) {
  return <Box>
    <LinearProgress variant="buffer" value={progress} valueBuffer={maxProgress} sx={{
      height: "15px",
      backgroundColor: "#484e51",
      ".MuiLinearProgress-bar1": {
        backgroundColor: "#55b725"
      },
      ".MuiLinearProgress-bar2": {
        backgroundColor: "#55b72555"
      },
      ".MuiLinearProgress-dashed": {
        backgroundImage: "none"
      }
    }} />
  </Box>
}
