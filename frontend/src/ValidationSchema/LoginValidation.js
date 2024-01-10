import * as Yup from 'yup';

const LoginSchema = Yup.object({
 
  email: Yup.string()
  .email('Invalid email address')
  .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email address')
  .required('Email is required'),

  password: Yup.string()
  .min(6, 'Password must be at least 6 characters')
  .matches(/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/, 'Password must contain at least one special character')
  .required('Password is required'),
});

export default LoginSchema;