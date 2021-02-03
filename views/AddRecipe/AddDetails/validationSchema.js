import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required('Pole jest wymagane'),
  size: Yup.string().required('Pole jest wymagane'),
  prepareTime: Yup.string().required('Pole jest wymagane'),
  description: Yup.string().required('Pole jest wymagane'),
});
