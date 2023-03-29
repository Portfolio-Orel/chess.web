import React, { useState } from "react";
import { useField } from "formik";

const FormFieldPassword = ({ label, name, ...props }) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = !showPassword ? "password" : "text";

  return (
    <div className="my-4">
      <div className="flex flex-col">
        <label
          className="block text-gray-700 font-bold mb-1"
          htmlFor={props.id || name}
        >
          {label}
        </label>
        <div className="relative">
          <input
            type={inputType}
            className={`appearance-none border ${
              meta.touched && meta.error ? "border-red-500" : "border-gray-200"
            } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            {...field}
            {...props}
          />
          <div
            className="absolute top-2 right-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 text-gray-500"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M20.71 15.88A10 10 0 0 1 4.25 9.07"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M14.14 14.14A6 6 0 0 1 9.07 9.07"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 text-gray-500"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M20.71 15.88A10 10 0 0 1 4.25 9.07"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M14.14 14.14A6 6 0 0 1 9.07 9.07"
                />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
            )}
          </div>
        </div>
        {meta.touched && meta.error && (
          <div className="text-red-500 text-xs italic">{meta.error}</div>
        )}
      </div>
    </div>
  );
};

export default FormFieldPassword;
