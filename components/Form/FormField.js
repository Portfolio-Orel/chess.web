import React from 'react';
import { useField } from 'formik';

const FormField = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  
  const isCheckbox = props.type === 'checkbox';
  const isTextarea = props.type === 'textarea';
  const isSelect = props.type === 'select';

  return (
    <div className="my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
        {isTextarea ? (
          <textarea
            className={`appearance-none border ${
              meta.touched && meta.error ? 'border-red-500' : 'border-gray-200'
            } rounded-lg w-full md:col-span-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            {...field}
            {...props}
          />
        ) : isCheckbox ? (
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 md:col-start-2"
            {...field}
            {...props}
          />
        ) : isSelect ? (
          <select
            className={`appearance-none border ${
              meta.touched && meta.error ? 'border-red-500' : 'border-gray-200'
            } rounded-lg w-full md:ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            {...field}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            className={`appearance-none border ${
              meta.touched && meta.error ? 'border-red-500' : 'border-gray-200'
            } rounded-lg w-full md:ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
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
