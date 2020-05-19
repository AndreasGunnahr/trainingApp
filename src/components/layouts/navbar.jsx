import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Link } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkText: {
    color: theme.palette.primary.main,
    textTransform: "uppercase",
    marginRight: theme.spacing(2),
    "&:last-child": {
      marginRight: "0",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="secondary">
      <Toolbar className={classes.toolbar}>
        <Link href="/" variant="h4" color="primary" underline="none">
          Logo
        </Link>
        <div>
          <Link
            href="/login"
            variant="h6"
            underline="none"
            className={classes.linkText}
          >
            Login
          </Link>
          <Link
            href="/register"
            variant="h6"
            underline="none"
            className={classes.linkText}
          >
            Register
          </Link>
          {/* Use on smaller screens with a drawer component */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
