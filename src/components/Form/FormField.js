import React from "react";
import { useField } from "formik";
import { Input, TextField } from "@mui/material";

const FormField = ({ label, name, variant, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <div>
      <div className="flex flex-col">
        <label
          className="mx-3 block text-gray-700 font-bold mb-1"
          htmlFor={props.id || name}
        >
          {label}
        </label>
        {variant === "outlined" ? (
          <TextField
            type="text"
            variant="outlined"
            className={`border ${
              meta.touched && meta.error ? "border-red-500" : "border-gray-200"
            } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight`}
            {...field}
            {...props}
          />
        ) : (
          <Input
            type="text"
            variant="outlined"
            className={`border ${
              meta.touched && meta.error ? "border-red-500" : "border-gray-200"
            } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight`}
            {...field}
            {...props}
          />
        )}
      </div>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-xs italic">{meta.error}</div>
      )}
    </div>
  );
};

export default FormField;
