import { Box, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
};

export interface WinModalProps {
  videoName: string;
  open: boolean;
  onClose: () => void;
  condition: "win" | "loose";
}

export function EndModal({
  videoName,
  open,
  onClose,
  condition,
}: WinModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        backgroundColor: "FFFFFF",
        outline: 0,
        border: 0,
      }}
    >
      <Box sx={style}>
        <Box sx={{ backgroundColor: "white" }} display="flex" justifyContent="center" flexDirection="column" alignItems="center">
          <Box
            display="flex"
            width="100%"
            justifyContent="center"
            sx={{ backgroundColor: condition === "win" ? "#55b725" : "#e23d3d" }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
              {condition === "win" ? "You've won!" : "You've lost!"}
            </Typography>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The song was:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: "bold" }}>
            {videoName}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
