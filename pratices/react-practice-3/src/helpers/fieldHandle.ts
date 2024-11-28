import {FormProps, FieldName} from '../common-types/form'

// handle validate field value
const setFieldsValue = (fieldsValue: FormProps, value: string, fieldName: FieldName): FormProps => {
  const fieldData = fieldsValue[fieldName];
  return {
    ...fieldsValue,
    [fieldName]: {
      ...fieldData,
      value: value,
      error: ""
    }
  };
}

export { setFieldsValue };