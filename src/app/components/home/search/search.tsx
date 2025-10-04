import React from "react";

import { ArrowBack } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";

import FileUploaderBtn from "./fileUploader";

export const Search = () => {
  return (
    <TextField
      fullWidth
      placeholder="بپرسید، بنویسید یا هر محصولی را سفارش دهید ..."
      multiline
      slotProps={{
        root: {
          sx: {
            mb: 1,
            minWidth: "50vw",
            "& .MuiOutlinedInput-root": {
              bgcolor: "white",
              borderRadius: 10,
              boxShadow: "0 0 15px #00000020",
              pr: 2.5,
              "& fieldset": { borderRadius: 10 },
            },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            "& .MuiInputBase-root": {
              flexDirection: { xs: "column", sm: "row" },
              // alignItems: "stretch",
              "& .MuiInputAdornment-root": {
                alignSelf: "flex-end",
                mt: { xs: 5, sm: 0 },
                mb: { xs: 1.5, sm: 0 },
              },
              "& textarea": {
                width: "100%",
                boxSizing: "border-box",
              },
            },
          },
        },
        input: {
          endAdornment: (
            <InputAdornment position="start">
              <>
                <FileUploaderBtn />
                <Button variant="contained" sx={{ minWidth: 50, px: 0, mr: 1 }}>
                  <ArrowBack />
                </Button>
              </>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};
