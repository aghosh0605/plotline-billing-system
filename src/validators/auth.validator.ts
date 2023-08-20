import * as yup from "yup";

export const yupSignupSchema = yup.object().shape({
  username: yup.string().trim().required("Please provide an username"),
  name: yup.string().trim().required("Please provide your full name"),
  password: yup
    .string()
    .trim()
    .required()
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/gm,
      "Password not matches required characters"
    ),
  email: yup
    .string()
    .required("Please provide an email address")
    .email()
    .trim(),
  isAdmin: yup.boolean().default(false),
  isVerified: yup.boolean().default(false),
});

export type SignupSchema = yup.InferType<typeof yupSignupSchema>;