import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Box,
  TextField,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
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
  const { register, errors, handleSubmit } = useForm();
  const getUsers = async (formData) => {
    let response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    let data = await response.json();
    return data;
  };

  const onSubmit = (values, e) => {
    getUsers(values);
    // console.log(values);
    e.preventDefault();
  };
  // useEffect(() => {
  //   console.log(getUsers());
  // }, []);

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
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-username"
          name="username"
          label="Username"
          type="text"
          autoComplete="username"
          margin="normal"
          variant="outlined"
          fullWidth
          error={!!errors.username}
          inputRef={register({
            required: "Required",
            // validate: async value => await fetch(url), // ska implementeras
            // pattern: {
            //   message: "Username is already taken",
            // },
          })}
          helperText={errors.username && errors.username.message}
        />
        <TextField
          id="outlined-password"
          label="Password"
          type="password"
          name="password"
          autoComplete="password"
          margin="normal"
          variant="outlined"
          fullWidth
          error={!!errors.password}
          inputRef={register({
            pattern: {
              required: "Required",
              // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              // message: "Wrong password",
            },
          })}
          helperText={errors.password ? errors.password.message : ""}
        />
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
