import React from "react";
import FormField from "./FormField";
import PropTypes from "prop-types";
import FormFieldTextarea from "./FormFieldTextArea";

const EventBaseDetails = ({ options }) => {
  return (
    <>
      <FormField label="Name" name="name" type="text" />
      <FormFieldTextarea label="Description" name="description"/>
      <FormField label="Price" name="price" type="number" />
      <FormField label="Event Type" name="event_type" type="text" />
      <FormField label="Event Format" name="event_format" type="text" />
      <div className="flex flex-col justify-start items-start">
        <FormField
          label="Is Rating Israel"
          name="is_rating_israel"
          type="checkbox"
        />
        <FormField
          label="Is Rating FIDE"
          name="is_rating_fide"
          type="checkbox"
        />
        <FormField
          label="Select an option"
          name="selectOption"
          type="select"
          options={options}
        />
      </div>
      {/* <FormField label="Game ID" name="game_id" type="text" /> */}
    </>
  );
};

EventBaseDetails.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default EventBaseDetails;
