import React from "react";
import { CssBaseline, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Import shared components
import Navbar from "./navbar";
import Footer from "./footer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.secondary.main,
    padding: 0,
    margin: 0,
  },
  inner_wrapper: {
    height: "calc(100vh - 64px)",
    display: "flex",
    flexDirection: "Column",
    justifyContent: "center",
  },
}));

const MainLayout = ({ children, maxWidth }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Navbar />
      <Container className={classes.inner_wrapper} maxWidth={maxWidth}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default MainLayout;
