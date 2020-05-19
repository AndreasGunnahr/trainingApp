import React from "react";
import {
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
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
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  checkbox: {
    color: theme.palette.primary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
    fontSize: theme.typography.fontSize * 1.5,
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  return (
    <Box className={classes.loginBox}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography
        component="h1"
        variant="h4"
        color="primary"
        className={classes.title}
      >
        Login to follow your journey
      </Typography>
      <form className={classes.form} noValidate>
        <TextFieldOutlined name="email" label="Username" type="text" />
        <TextFieldOutlined name="password" label="Password" type="password" />
        <FormControlLabel
          control={
            <Checkbox
              value="remember"
              color="primary"
              className={classes.checkbox}
            />
          }
          label="Remember me"
          className={classes.checkbox}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default LoginForm;
