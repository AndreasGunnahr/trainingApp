import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "./copyright";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100%",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Copyright />
    </Box>
  );
};

export default Footer;
