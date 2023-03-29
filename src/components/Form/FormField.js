import React, { useState } from "react";
import { useField } from "formik";

const FormField = ({ label, options, name, ...props }) => {
  const [field, meta] = useField(name);

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
            type="text"
            className={`appearance-none border ${
              meta.touched && meta.error ? "border-red-500" : "border-gray-200"
            } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            {...field}
            {...props}
          />
        </div>
      </div>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-xs italic">{meta.error}</div>
      )}
    </div>
  );
};

export default FormField;
