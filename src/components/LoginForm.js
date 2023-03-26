import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth';
import FormField from './Form/FormField';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    dispatch(login(values.email, values.password));
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting, isValidating }) => (
        <Form>
          <FormField label="Email" name="email" type="email" placeholder="Enter your email" />
          <FormField label="Password" name="password" type="password" placeholder="Enter your password" />
          <button type="submit" disabled={isSubmitting || isValidating}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
