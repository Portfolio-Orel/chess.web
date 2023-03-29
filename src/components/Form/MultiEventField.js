import React, { useState } from "react";
import { useField } from "formik";
import PropTypes from "prop-types";
import FormField from "./FormField";
import RadioGroupField from "./RadioGroupField";
import FormFieldCheckbox from "./FormFieldCheckbox";

const MultiEventField = ({ label, name, ...props }) => {
  const [field, meta] = useField(name);
  const [showIntervals, setShowIntervals] = useState(false);
  const [customInterval, setCustomInterval] = useState("");

  const toggleIntervalVisibility = () => {
    // const x = field;
    // const y = meta;
    // debugger;
    setShowIntervals(!showIntervals);
  };

  const handleCustomIntervalChange = (event) => {
    setCustomInterval(event.target.value);
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
        <div className="flex items-start flex-col">
          <FormFieldCheckbox
            label="Multiple Events?"
            name={`${name}.multipleEvents`}
            type="checkbox"
            onClick={toggleIntervalVisibility}
            {...props}
          />
          {field?.value?.multipleEvents && (
            <div className="ml-4">
              <RadioGroupField
                label="Interval"
                name={`${name}.interval`}
                options={[
                  { label: "Daily", value: "daily" },
                  { label: "Weekly", value: "weekly" },
                  { label: "Monthly", value: "monthly" },
                  { label: "Custom", value: "custom" },
                ]}
                {...props}
              />
              {field?.value?.interval === "custom" && (
                <div className="ml-4">
                  <FormField
                    label="Custom Interval"
                    name={`${name}.customInterval`}
                    type="number"
                    onChange={handleCustomIntervalChange}
                    value={customInterval}
                    {...props}
                  />
                  <span className="ml-1">days</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-xs italic">{meta.error}</div>
      )}
    </div>
  );
};

MultiEventField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MultiEventField;
