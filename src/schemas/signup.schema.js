import * as Yup from 'yup';

export const signupSchema = Yup.object({
  firstName: Yup
    .string('Email err')
    .required('Required'),
  lastName: Yup
    .string('Email err')
    .required('Required'),
  userName: Yup
    .string('Email err')
    .required('Required'),
  email: Yup
    .string('Email err')
    .email('Invalid email')
    .required('Required'),
  password: Yup
    .string('Password err')
    .min(8, 'Length invalid')
    .required('Required')
})