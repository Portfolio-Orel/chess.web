import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material";

const FormFieldTextarea = ({ label, name, ...props }) => {
  const [field, meta] = useField(name);

  const scrollbarStyles = {
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#a0aec0",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#718096",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#edf2f7",
      borderRadius: "4px",
    },
  };

  return (
    <div>
      <div className="flex flex-col">
        <label
          className="mx-3 block text-gray-700 font-bold mb-1"
          htmlFor={props.id || name}
        >
          {label}
        </label>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          className={`border ${
            meta.touched && meta.error ? "border-red-500" : "border-gray-200"
          } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight`}
          InputProps={{
            style: scrollbarStyles,
          }}
          {...field}
          {...props}
        />
      </div>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-xs italic">{meta.error}</div>
      )}
    </div>
  );
};

export default FormFieldTextarea;
