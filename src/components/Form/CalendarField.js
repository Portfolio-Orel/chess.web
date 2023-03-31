import React from "react";
import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarField = ({ label, name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (date) => {
    helpers.setValue(new Date(date));
  };

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
          <DatePicker
            className={`appearance-none border ${
              meta.touched && meta.error ? "border-red-500" : "border-gray-200"
            } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            selected={field.value}
            onChange={handleChange}
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

export default CalendarField;
