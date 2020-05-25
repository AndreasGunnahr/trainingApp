import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid, Typography, TextField, Box } from "@material-ui/core";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
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
    margin: theme.spacing(2, 0, 2, 0),
    fontSize: theme.typography.fontSize * 1.5,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
  },
}));

const RegisterForm = () => {
  const classes = useStyles();
  const { register, watch, errors, handleSubmit, reset } = useForm({
    mode: "onSubmit",
  });

  // })
  // const createUser = async () => {
  //   let response = await fetch("/api/users");
  //   let data = await response.json();
  //   return data;
  // };

  // useEffect(() => {
  //   console.log(getUsers());
  // }, []);

  const onSubmit = (values, e) => {
    e.preventDefault();
    console.log(values);
    console.log(errors);
  };

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
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-full-name"
              label="Full name"
              type="text"
              name="name"
              autoComplete="name"
              margin="normal"
              variant="outlined"
              fullWidth
              error={!!errors.name}
              inputRef={register({
                // pattern: {
                //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                //   message: "invalid email address",
                // },
              })}
              helperText={errors.name ? errors.name.message : ""}
            />
            <TextField
              id="outlined-username"
              name="username"
              label="Username"
              type="text"
              autoComplete="username"
              margin="normal"
              variant="outlined"
              fullWidth
              required={true}
              error={!!errors.username}
              inputRef={register({
                required: "Required",
                // validate: async value => await fetch(url), // ska implementeras
                pattern: {
                  message: "Username is already taken",
                },
              })}
              helperText={errors.username && errors.username.message}
            />
            <TextField
              id="outlined-email"
              label="Email address"
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              fullWidth
              required={true}
              error={!!errors.email}
              inputRef={register({
                pattern: {
                  required: "Required",
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              helperText={errors.email ? errors.email.message : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-password"
              label="Password"
              type="password"
              name="password"
              autoComplete="password"
              margin="normal"
              variant="outlined"
              fullWidth
              required={true}
              error={!!errors.password}
              inputRef={register({
                // pattern: {
                //   required: "Required",
                //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                //   message: "Invalid email address",
                // },
              })}
              helperText={errors.password ? errors.password.message : ""}
            />
            <TextField
              id="outlined-re-password"
              label="Re-enter password"
              type="password"
              name="password2"
              autoComplete="password2"
              margin="normal"
              variant="outlined"
              fullWidth
              required={true}
              error={!!errors.password2}
              inputRef={register({
                pattern: {
                  required: "Required",
                  validate: (value) =>
                    value === watch("password") || "Passwords don't match.",
                  message: "Passwords don't match.",
                },
              })}
              helperText={errors.password2 ? errors.password2.message : ""}
            />
          </Grid>
        </Grid>
        {/* <Box className={classes.buttonContainer}>
          <Button
            onClick={reset}
            className={classes.submit}
            fullWidth
            variant="contained"
            color="primary"
          >
            Reset
          </Button> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Register
        </Button>
        {/* </Box> */}
      </form>
    </Box>
  );
};

export default RegisterForm;
