"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF7416",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "ISX, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          borderWidth: 2,
          paddingTop: 12,
          paddingBottom: 12,
        },
        containedPrimary: {
          background: "linear-gradient(90deg, #FCAE6A 0%, #FF7416 100%)",
        },
        sizeLarge: ({ theme }) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: "1.1rem",
          },
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          right: "auto",
          left: 8,
        },
        select: {
          paddingLeft: 38,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          direction: "ltr",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
