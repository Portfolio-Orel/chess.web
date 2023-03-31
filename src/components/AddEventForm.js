import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import EventBaseDetails from "./Form/EventBaseDetails";
import MultiEventField from "./Form/MultiEventField";
import { handleAddEvent } from "../redux/actions/event";
import Button from "./Button";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  is_price_per_game: Yup.boolean().required("Required"),
  currency: Yup.string().required("Required"),
  event_type: Yup.string().required("Required"),
  event_format: Yup.string().required("Required"),
  is_rating_israel: Yup.boolean().required("Required"),
  is_rating_fide: Yup.boolean().required("Required"),
  game: Yup.string().required("Required"),
  game_format: Yup.string().required("Required"),
});

const AddEventForm = () => {
  const dispatch = useDispatch();
  const intervals = useSelector((state) => state?.intervals?.intervals) ?? [];
  const isLoadingAddEvents = useSelector(
    (state) => state?.events?.loading ?? false
  );

  const [showDetails, setShowDetails] = useState(false);

  const onBaseDetailsSubmit = () => {
    setShowDetails(true);
  };

  const buildDates = (startDate, intervalValue, eventsCount) => {
    const dates = [];
    for (let i = 0; i < eventsCount; i++) {
      const newDate = new Date(startDate);
      newDate.setDate(newDate.getDate() + intervalValue * i);
      dates.push(newDate);
    }
    return dates;
  };

  return (
    <Formik
      initialValues={{
        start_date: new Date(),
        dates: [],
        name: "",
        description: "",
        price: "",
        currency: "",
        is_price_per_game: false,
        event_type: "",
        event_format: "",
        is_rating_israel: false,
        is_rating_fide: false,
        game: "",
        game_format: "",
      }}
      // validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values));
        const interval =
          intervals.find((int) => int.name === values.interval_object.interval)
            ?.value ?? 1; // TODO: Set in object the value
        const dates = buildDates(
          values.start_date,
          interval,
          values.interval_object.numberOfEvents ?? 1
        );
        const name = values.name;
        const description = values.description;
        const price = values.price;
        const currency = values.currency === "" ? "ILS" : values.currency;
        const game_format_id = values.game_format.id;
        const game_id = values.game.id;
        const is_rating_israel = values.is_rating_israel;
        const is_rating_fide = values.is_rating_fide;
        const event = {
          dates,
          name,
          description,
          price,
          currency,
          game_format_id,
          game_id,
          is_rating_israel,
          is_rating_fide,
        };
        dispatch(handleAddEvent(event));
      }}
    >
      {({ dirty, isValid, values }) => (
        <Form className="p-4 bg-white rounded-lg shadow-md max-w-md">
          <div className="max-w-md mx-auto">
            {showDetails ? (
              <div className="rounded-lg p-4 mt-4 animate-fade-in">
                <h2 className="text-lg font-semibold mb-4">Event Details</h2>
                <div className="mb-4">
                  <label className="block font-medium mb-1">Name</label>
                  <div className="bg-gray-100 p-2 rounded-lg">
                    {values.name}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium mb-1">Description</label>
                  <div className="bg-gray-100 p-2 rounded-lg">
                    {values.description}
                  </div>
                </div>
                <MultiEventField name="interval_object" onSubmit={() => {}} />
                <Button
                  type="submit"
                  // disabled={!dirty || !isValid}
                  className="block w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                  isLoading={isLoadingAddEvents}
                >
                  Submit
                </Button>
              </div>
            ) : (
              <div className="animate-fade-in">
                <EventBaseDetails />
                <button
                  onClick={onBaseDetailsSubmit}
                  // disabled={!dirty || !isValid}
                  className="block w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddEventForm;
