import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./Form/FormField";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  currency: Yup.string().required("Required"),
  event_type: Yup.string().required("Required"),
  event_format: Yup.string().required("Required"),
  is_rating_israel: Yup.boolean().required("Required"),
  is_rating_fide: Yup.boolean().required("Required"),
  game_id: Yup.string().required("Required"),
});

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const AddEventForm = () => {
  return (
    <Formik
      initialValues={{
        dates: [],
        name: "",
        description: "",
        price: "",
        currency: "",
        event_type: "",
        event_format: "",
        is_rating_israel: false,
        is_rating_fide: false,
        game_id: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        alert("submitted");
      }}
    >
      {({ dirty, isValid }) => (
        <Form className="p-4 bg-white rounded-lg shadow-md max-w-md">
          <FormField label="Name" name="name" type="text" />
          <FormField label="Description" name="description" type="textarea" />
          <FormField label="Price" name="price" type="number" />
          {/* <FormField label="Currency" name="currency" type="text" /> */}
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
          <button
            type="submit"
            disabled={!dirty || !isValid}
            className="block w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddEventForm;
