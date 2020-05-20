import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const TextFieldOutlined = ({ name, label, type }) => {
  const [inputLength, setInputLength] = useState(0);
  const [error, setError] = useState(true);

  const onChange = (value) => {
    // setInputLength(value.length);
    // console.log(value);
    value.length > 5 ? console.log("RÄTT") : console.log("fel");
  };

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
      onChange={(e) => onChange(e.target.value)}
      // onBlur={(e)}
    />
  );
};

export default TextFieldOutlined;
