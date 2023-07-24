import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
});
