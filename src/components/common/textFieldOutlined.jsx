import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const TextFieldOutlined = ({ name, label, type }) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      id={"textfield-" + name}
      label={label}
      type={type}
      name={name}
      autoComplete={name}

      // onBlur={(e)}
    />
  );
};

export default TextFieldOutlined;
