import React from "react";

import { ArrowBack } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";

export const Search = () => {
  return (
    <>
      <TextField
        fullWidth
        placeholder="بپرسید، بنویسید یا هر محصولی را سفارش دهید"
        multiline
        sx={{
          mb: 4,
          minWidth: "50vw",
          "& .MuiOutlinedInput-root": {
            borderRadius: 10,
            "& fieldset": { borderRadius: 10 },
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="start">
                <Options />
              </InputAdornment>
            ),
          },
        }}
      />
    </>
  );
};

const Options = () => {
  return (
    <>
      <Button variant="contained" sx={{ minWidth: 50, px: 0 }}>
        <ArrowBack />
      </Button>
    </>
  );
};
