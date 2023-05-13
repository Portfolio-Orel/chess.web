import React, { useState } from "react";
import { useField } from "formik";
import { Input, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const FormFieldPassword = ({ label, name, ...props }) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = !showPassword ? "password" : "text";

  return (
    <div>
      <div className="flex flex-col">
        <label
          className="block text-gray-700 font-bold mb-1"
          htmlFor={props.id || name}
        >
          {label}
        </label>
        <div className="relative">
          <Input
            type={inputType}
            className={`border ${
              meta.touched && meta.error ? "border-red-500" : "border-gray-200"
            } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight`}
            {...field}
            {...props}
            startAdornment={
              <InputAdornment position="end">
                <div
                  className="cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <VisibilityOffIcon className="text-gray-500" />
                  ) : (
                    <VisibilityIcon className="text-gray-500" />
                  )}
                </div>
              </InputAdornment>
            }
          />
        </div>
        {meta.touched && meta.error && (
          <div className="text-red-500 text-xs italic">{meta.error}</div>
        )}
      </div>
    </div>
  );
};

export default FormFieldPassword;
