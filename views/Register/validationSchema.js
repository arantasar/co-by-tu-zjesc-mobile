import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Niewłaściwy format')
    .required('Pole jest wymagane'),
  name: Yup.string().required('Pole jest wymagane'),
  password: Yup.string().required('Pole jest wymagane'),
  password2: Yup.string()
    .required('Pole jest wymagane')
    .oneOf([Yup.ref('password'), null], 'Hasła nie są takie same'),
});
