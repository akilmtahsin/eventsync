import * as Yup from 'yup';

const SignUpSchema = Yup.object({
  username: Yup.string()
  .required('Name is required'),
  
  email: Yup.string()
  .email('Invalid email address')
  .required('Email is required'),

  password: Yup.string()
  .min(6, 'Password must be at least 6 characters')
  .matches(/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/, 'Password must contain at least one special character')
  .required('Password is required'),
});

export default SignUpSchema;