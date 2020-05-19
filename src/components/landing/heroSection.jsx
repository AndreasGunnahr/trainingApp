import React from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontStyle: "italic",
    marginTop: theme.spacing(1),
    cursor: "default",
  },
  heroText: {
    marginTop: "-124px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    cursor: "default",
  },
  startButton: {
    marginTop: theme.spacing(10),
    height: "80px",
    fontSize: "1.25rem",
    fontWeight: 700,
    width: "100%",
  },
  buttonContainer: {
    textAlign: "center",
  },
}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography
        component="h1"
        variant="h1"
        color="primary"
        className={classes.heroText}
        align="center"
      >
        Why be average when you can be great.
      </Typography>
      <Typography
        component="h2"
        variant="h5"
        color="primary"
        align="center"
        className={classes.text}
      >
        It has never been so easy to track your training!
      </Typography>
      <Container maxWidth={"md"} className={classes.buttonContainer}>
        <Button
          href="/login"
          variant="contained"
          color="primary"
          className={classes.startButton}
        >
          Track your progress today!
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
