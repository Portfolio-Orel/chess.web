import React from "react";
import { useField } from "formik";
import { Tooltip } from "@mui/material";

const FormFieldCheckbox = ({ label, name, tooltip, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <div>
      <Tooltip title={tooltip} placement="top">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            checked={field.value}
            {...field}
            {...props}
          />
          <span className="text-gray-700 mx-2">{label}</span>
        </label>
      </Tooltip>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-xs italic">{meta.error}</div>
      )}
    </div>
  );
};

export default FormFieldCheckbox;