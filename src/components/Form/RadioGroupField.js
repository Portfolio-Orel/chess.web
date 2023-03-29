import React from "react";
import { useField } from "formik";
import PropTypes from "prop-types";

const RadioGroupField = ({ label, name, options, ...props }) => {
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
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              id={`${name}-${option.value}`}
              {...field}
              {...props}
              value={option.value}
              checked={field.value === option.value}
            />
            <label
              htmlFor={`${name}-${option.value}`}
              className="ml-2 text-gray-700"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-xs italic">{meta.error}</div>
      )}
    </div>
  );
};

RadioGroupField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RadioGroupField;
