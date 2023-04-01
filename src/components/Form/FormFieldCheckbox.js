import React from "react";
import { useField } from "formik";

const FormFieldCheckbox = ({ label, name, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <div className="my-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          checked={field.value}
          {...field}
          {...props}
        />
        <span className="ml-2 text-gray-700">{label}</span>
      </label>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-xs italic">{meta.error}</div>
      )}
    </div>
  );
};

export default FormFieldCheckbox;
