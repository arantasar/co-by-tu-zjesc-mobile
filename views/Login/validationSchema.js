import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Niewłaściwy format')
    .required('Pole jest wymagane'),
  password: Yup.string().required('Pole jest wymagane'),
});
