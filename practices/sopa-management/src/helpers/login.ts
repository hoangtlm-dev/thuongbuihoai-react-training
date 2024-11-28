import {
  Account,
  CheckType,
  LoginType
} from "@interfaces/account";
import { FieldError } from "react-hook-form";

// Check login
export const checkAccount = (
  data?: Account[],
  email?: string,
  password?: string,
  checkType?: CheckType,
) => {
  return data?.some((user: Account) => {
    const checkEmail = user.email === email;
    const checkPassword = user.password === password;
    const checkLogin = checkType === CheckType.login && checkEmail && checkPassword;

    if (checkLogin
      || checkType === CheckType.email && checkEmail
      || checkType === CheckType.password && checkPassword
    ) {
      return true;
    }
    return false;
  })
};

export const checkValidationStyles = (
  serverError: boolean,
  rules: FieldError | undefined,
  isDirty: boolean,
  type: LoginType,
) => {
  const checkIsDirty = isDirty ? type.info : type.default
  const style = serverError || rules ? type.error : checkIsDirty;

  return { style };
};
