import React from "react";
import { Button, Grid, Typography, TextField, Box } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextFieldOutlined from "../common/textFieldOutlined";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loginBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "-124px",
  },
  title: {
    marginBottom: theme.spacing(2),
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    fontSize: theme.typography.fontSize * 1.5,
  },
}));

const RegisterForm = () => {
  const classes = useStyles();
  return (
    <Box className={classes.loginBox}>
      <Typography
        component="h1"
        variant="h4"
        color="primary"
        align="center"
        className={classes.title}
      >
        Create your account today!
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextFieldOutlined name="Full name" label="Full name" type="text" />
            <TextFieldOutlined name="username" label="Username" type="text" />
            <TextFieldOutlined name="email" label="Email" type="email" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextFieldOutlined name="Full name" label="Full name" type="text" />
            <TextFieldOutlined
              name="password"
              label="Password"
              type="password"
            />
            <TextFieldOutlined
              name="re-password"
              label="Repeat password"
              type="password"
            />
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Register
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
