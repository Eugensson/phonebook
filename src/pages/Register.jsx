import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Wrapper,
  FormWrapper,
  FormGroup,
  LogInSignUpBtn,
  Title,
  FormLabel,
  FormError,
  FormInput,
} from 'components/pages.styled';

import { signUp } from 'redux/auth/operations';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(10)
    .max(60)
    .required('should be composed of two words with a space between them'),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(5)
    .max(10)
    .required('password must contain between 5 and 10 characters'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    resetForm();
    dispatch(signUp(value));
  };

  return (
    <Wrapper>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ isValid }) => (
          <FormWrapper autoComplete="off">
            <Title>Sign Up</Title>
            <FormGroup>
              <FormLabel>
                <FormInput
                  isvalid={isValid.toString()}
                  type="text"
                  name="name"
                  placeholder="Full name"
                />
                <FormError name="name" component="p" />
              </FormLabel>
              <FormLabel>
                <FormInput
                  isvalid={isValid.toString()}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <FormError name="email" component="p" />
              </FormLabel>
              <FormLabel>
                <FormInput
                  isvalid={isValid.toString()}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <FormError name="password" component="p" />
              </FormLabel>
            </FormGroup>

            <LogInSignUpBtn type="submit" disabled={!isValid}>
              SignUp
            </LogInSignUpBtn>
          </FormWrapper>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
