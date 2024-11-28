import { REGEX } from "@constants/regex"
import { ERROR_MESSAGES } from "@constants/validate"

// Validate
export const VALIDATE = {
  email: {
    required: ERROR_MESSAGES.REQUIRED,
    pattern: {
      value: REGEX.EMAIL,
      message: ERROR_MESSAGES.EMAIL_FORMAT,
    },
  },
  password: {
    required: ERROR_MESSAGES.REQUIRED,
    pattern: {
      value: REGEX.PASSWORD,
      message: ERROR_MESSAGES.PASSWORD_FORMAT,
    },
  },
}
