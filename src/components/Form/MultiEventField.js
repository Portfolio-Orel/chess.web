import React, { useEffect, useMemo, useState } from "react";
import { useField } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { handleFetchIntervals } from "@/redux/actions/intervals";
import PropTypes from "prop-types";
import FormField from "./FormField";
import RadioGroupField from "./RadioGroupField";
import FormFieldCheckbox from "./FormFieldCheckbox";
import { useTranslation } from "react-i18next";

const MultiEventField = ({ label, name, ...props }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const intervals = useSelector((state) => state.intervals);

  const [field, meta] = useField(name);

  const [intervalOptions, setIntervalOptions] = useState([]);
  const [showIntervals, setShowIntervals] = useState(false);

  useEffect(() => {
    if (field?.value === "Custom") {
      setCustomInterval(field?.value);
    }
  }, [field]);

  const toggleIntervalVisibility = () => {
    setShowIntervals(!showIntervals);
    if (
      intervals &&
      intervals.intervals &&
      intervals.intervals.length === 0 &&
      !intervals.loading
    ) {
      dispatch(handleFetchIntervals());
    }
  };

  useEffect(() => {
    if (intervals?.intervals && intervals?.intervals.length > 0) {
      const options = [];
      if (intervals?.intervals) {
        intervals.intervals.forEach((interval) => {
          options.push({
            label: interval.name,
            value: interval.name,
          });
        });
      }
      setIntervalOptions(options);
    }
  }, [intervals?.intervals]);

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
            label={`${t("multiple_events")}?`}
            name={`${name}.multipleEvents`}
            type="checkbox"
            onClick={toggleIntervalVisibility}
            {...props}
          />
          {field?.value?.multipleEvents && (
            <div className="ml-4">
              <FormField
                label={`${t("how_many_events")}?`}
                name={`${name}.numberOfEvents`}
                type="number"
                value={field?.value?.numberOfEvents ?? ""}
                {...props}
              />
              <RadioGroupField
                label={`${t("interval")}`}
                name={`${name}.interval`}
                options={intervalOptions}
                isLoading={!intervals || intervals.loading}
                {...props}
              />
              {field?.value?.interval === "Custom" && (
                <div className="ml-4">
                  <FormField
                    label={t("custom_interval")}
                    name={`${name}.customInterval`}
                    type="number"
                    value={field?.value ?? ""}
                    {...props}
                  />
                  <span className="ml-1">{t("days")}</span>
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
