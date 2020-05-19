import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontSize: "4.75rem",
      fontWeight: 900,
    },
    // h2: {
    //   fontWeight: 900,
    // },
    // h3: {
    //   fontWeight: 900,
    // },
    h4: {
      fontWeight: 900, // ?
    },
    h5: {
      fontWeight: 500, // ?
    },
    // h6: {
    //   fontWeight: 900,
    // },
  },
  palette: {
    primary: {
      main: "#CFB49E",
    },
    secondary: {
      main: "#0E0D0E",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        height: "60px",
      },
    },
    MuiOutlinedInput: {
      root: {
        height: "60px",
        color: "#CFB49E",
        "& $notchedOutline": {
          borderColor: "#CFB49E",
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#CFB49E",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderColor: "#CFB49E",
          },
        },
        "&$focused $notchedOutline": {
          borderColor: "#CFB49E",
          borderWidth: 1,
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: "#CFB49E",
        "&$focused": {
          color: "#CFB49E",
        },
      },
    },
  },
});

export default theme;
