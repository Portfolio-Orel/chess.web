import React from "react";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";
import FormField from "./Form/FormField";
import Button from "./Button";
import FormFieldPassword from "./Form/FormFieldPassword";

const LoginForm = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    dispatch(login(values.email, values.password));
    setSubmitting(false);
  };

  return (
    <div className="rounded border-gray-300 p-10 flex justify-center items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValidating }) => (
          <Form>
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <FormFieldPassword
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <div className="w-full flex justify-center items-center p-4">
              <Button
                className="bg-sky-700 p-3 rounded-md w-44 text-md text-indigo-50 font-bold"
                isLoading={authState?.isLoading}
                type={authState?.isLoading ? "text" : "submit"}
                disabled={isSubmitting || isValidating}
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
