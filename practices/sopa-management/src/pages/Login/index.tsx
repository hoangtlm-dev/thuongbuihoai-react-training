import {
  memo,
  useEffect,
  useRef
} from 'react';
import {
  useForm,
  Controller
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import toast from 'react-hot-toast';

// Components
import {
  Button,
  ButtonType,
  Input,
  InputType,
  SizeType,
  Text
} from '@components/common';

// Hooks
import { useFetchUser } from '@hooks/useQuery';

// Interfaces
import {
  Account,
  CheckType
} from '@interfaces/account';

// Helpers
import { VALIDATE } from '@helpers/validate';
import {
  checkAccount,
  checkValidationStyles
} from '@helpers/login';

// Stores
import { useAuthenticationStore } from '@stores/login';

// Constants
import {
  CONFIRM_MESSAGE,
  ERROR_MESSAGES
} from '@constants/validate';

// Styles
import './login.css';

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const { data } = useFetchUser();
  const [
    isIncorrectEmail,
    isIncorrectPassword,
    setIsIncorrectEmail,
    setIsIncorrectPassword,
    handleLogin
  ] = useAuthenticationStore(
    (state) => [
      state.isIncorrectEmail,
      state.isIncorrectPassword,
      state.setIsIncorrectEmail,
      state.setIsIncorrectPassword,
      state.login
    ],
    shallow
  );

  const resetErrors = () => {
    setIsIncorrectEmail(false);
    setIsIncorrectPassword(false);
  };

  useEffect(() => {
    resetErrors();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty }
  } = useForm<Account>();

  const { style: styleEmail } = checkValidationStyles(
    isIncorrectEmail,
    errors.email,
    isDirty,
    InputType
  );

  const { style: stylePassword } = checkValidationStyles(
    isIncorrectPassword,
    errors.password,
    isDirty,
    InputType
  );

  const onSubmit = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    handleLogin(data, email, password, CheckType.login);

    if (checkAccount(data, email, password, CheckType.login)) {
      navigate('/');
      toast.success(CONFIRM_MESSAGE.LOGIN_SUCCESS);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='form'
      data-testid='login'
    >
      <Text text='Login' type={SizeType.extraMedium} />
      <div className='form-input'>
        <Controller
          name='email'
          control={control}
          rules={VALIDATE.email}
          render={({ field }) => (
            <div className='form-email'>
              <Input
                {...field}
                id='email'
                label='Email'
                htmlFor='email'
                ref={(e) => {
                  register('email');
                  emailRef.current = e;
                }}
                style={styleEmail}
                theme={styleEmail}
                onBlur={resetErrors}
              />
              {errors?.email && (
                <Text text={errors.email.message} className='form-error' />
              )}
              {isIncorrectEmail && (
                <Text
                  text={ERROR_MESSAGES.EMAIL_NOT_EXIST}
                  className='form-error'
                />
              )}
            </div>
          )}
        />
        <Controller
          name='password'
          control={control}
          rules={VALIDATE.password}
          render={({ field }) => (
            <div className='form-password'>
              <Input
                {...field}
                id='password'
                label='Password'
                htmlFor='password'
                type='password'
                ref={(e) => {
                  register('password');
                  passwordRef.current = e;
                }}
                style={stylePassword}
                theme={stylePassword}
                onBlur={resetErrors}
              />
              {errors?.password && (
                <Text text={errors.password.message} className='form-error' />
              )}
              {isIncorrectPassword && (
                <Text
                  text={ERROR_MESSAGES.PASSWORD_INCORRECT}
                  className='form-error'
                />
              )}
            </div>
          )}
        />
        <Button
          ariaLabel='Login'
          children={'Login'}
          type={ButtonType.tertiary}
          submit='submit'
        />
      </div>
    </form>
  );
};

export default memo(Login);
