import React, { useEffect } from "react";
import { useField } from "formik";
import PropTypes from "prop-types";
import Skeleton from "../Skeleton";
import { useTranslation } from "react-i18next";

const RadioGroupField = ({ label, name, options, isLoading, ...props }) => {
  const { t } = useTranslation();
  const [field, meta, helpers] = useField(name);

  useEffect(() => {
    if (options && options.length > 0 && !field.value) {
      helpers.setValue(options[0].value);
    }
  });

  return (
    <div className="my-4">
      {isLoading ? (
        <div className="flex flex-col w-full gap-2 ">
          <Skeleton width={120} height={15} />
          <Skeleton width={120} height={15} />
          <Skeleton width={120} height={15} />
        </div>
      ) : (
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
                name={field.name}
                id={`${name}-${option.value}`}
                {...field}
                {...props}
                value={option.value}
                checked={`${field.value}` === `${option.value}`}
              />
              <label
                htmlFor={`${name}-${option.value}`}
                className="mx-2 text-gray-700"
              >
                {t(option.label.toLowerCase()) ?? option.label}
              </label>
            </div>
          ))}
        </div>
      )}

      {meta.touched && meta.error && (
        <div className="text-red-500 text-xs italic">{meta.error}</div>
      )}
    </div>
  );
};

RadioGroupField.defaultProps = {
  isLoading: false,
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
  isLoading: PropTypes.bool,
};

export default RadioGroupField;
