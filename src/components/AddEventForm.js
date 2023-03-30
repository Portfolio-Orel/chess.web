import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import EventBaseDetails from "./Form/EventBaseDetails";
import MultiEventField from "./Form/MultiEventField";

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

const AddEventForm = () => {
  const [baseDetails, setBaseDetails] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  const onBaseDetailsSubmit = (values) => {
    setBaseDetails(values);
    setShowDetails(true);
  };

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
        onSubmit(values);
      }}
    >
      {({ dirty, isValid }) => (
        <Form className="p-4 bg-white rounded-lg shadow-md max-w-md">
          <div className="max-w-md mx-auto">
            {showDetails ? (
              <div className="rounded-lg p-4 mt-4 animate-fade-in">
                <h2 className="text-lg font-semibold mb-4">Event Details</h2>
                <div className="mb-4">
                  <label className="block font-medium mb-1">Name</label>
                  <div className="bg-gray-100 p-2 rounded-lg">
                    {baseDetails.name}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium mb-1">Description</label>
                  <div className="bg-gray-100 p-2 rounded-lg">
                    {baseDetails.description}
                  </div>
                </div>
                <MultiEventField
                  label="Label"
                  name="Name"
                  onSubmit={() => {}}
                />
              </div>
            ) : (
              <div className="animate-fade-in">
                <EventBaseDetails
                  onSubmit={onBaseDetailsSubmit}
                />
              </div>
            )}
            <button
              type="submit"
              disabled={!dirty || !isValid}
              className="block w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddEventForm;
