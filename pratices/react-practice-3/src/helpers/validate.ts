import { ERROR_MSG } from "@constants/message";
import { RULES } from "@constants/rules";
import { FormProps } from "@common-types/form";

// check required
const checkRequired = (
  value: string,
  errors: { [fieldName: string]: { error: string } },
  fieldName: string
): void => {
  if (value) {
    errors[fieldName].error = "";
  } else {
    errors[fieldName].error = ERROR_MSG.REQUIRED;
  }
};

// check value is number
const checkNumber = (
  value: string,
  errors: { [fieldName: string]: { error: string } },
  fieldName: string
): void => {
  if (typeof +value == RULES.NUMBER) {
    errors[fieldName].error += "";
  } else {
    errors[fieldName].error += ERROR_MSG.NUMBER;
  }
};

// check value is negative
const checkNegative = (
  value: string,
  errors: { [fieldName: string]: { error: string } },
  fieldName: string
): void => {
  if (+value < 0) {
    errors[fieldName].error += ERROR_MSG.NUMBER;
  } else {
    errors[fieldName].error += "";
  }
};

// handle validate
const validate = (values: FormProps): FormProps => {
  const errors = { ...values };
  (Object.keys(errors) as (keyof FormProps)[]).map((fieldName) => {
    errors[fieldName].rules.map((rule: string) => {
      if (rule === RULES.REQUIRED) {
        checkRequired(errors[fieldName].value, errors, fieldName);
      }
      if (rule === RULES.NUMBER) {
        checkNumber(errors[fieldName].value, errors, fieldName);
      }
      if (rule === RULES.NEGATIVE) {
        checkNegative(errors[fieldName].value, errors, fieldName);
      }
    });
  });

  return errors;
};

export { validate };
