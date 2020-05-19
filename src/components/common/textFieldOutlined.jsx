import React from "react";
import { TextField } from "@material-ui/core";

const textFieldOutlined = ({ name, label, type }) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      id={name}
      label={label}
      type={type}
      name={name}
      autoComplete={name}
    />
  );
};

export default textFieldOutlined;
