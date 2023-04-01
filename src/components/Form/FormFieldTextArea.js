import React from "react";
import { useField } from "formik";

const FormFieldTextarea = ({ label, name, ...props }) => {
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
        <textarea
          className={`appearance-none border ${
            meta.touched && meta.error ? "border-red-500" : "border-gray-200"
          } py-2 px-3 rounded-lg w-full md:col-span-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
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
