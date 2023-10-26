import {
  memo,
  useRef
} from 'react';
import {
  useForm,
  Controller
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// Components
import Input,
{
  InputTheme,
  InputType
} from '../../components/common/Input';
import Button,
{
  ButtonType
} from '../../components/common/Button';
import Text,
{
  SizeType
} from '../../components/common/Text';

// Hooks
import { useFetchUser } from '../../hooks/useQuery';

// Interfaces
import { Account } from '../../interfaces/account';

// Helpers
import { setStorage } from '../../helpers/storage';
import {
  checkEmail,
  checkLogin,
  checkPassword
} from '../../helpers/common';

// Stores
import { useAccountStore } from '../../stores/login';

// Constants
import { STORAGE_KEY } from '../../constants/common';

// Styles
import './login.css';
import { VALIDATE } from '../../helpers/validate';
import { ERROR_MESSAGES } from '../../constants/validate';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const { data } = useFetchUser();
  const {
    isIncorrectEmail,
    isIncorrectPassword,
    setIsIncorrectEmail,
    setIsIncorrectPassword,
  } = useAccountStore();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm<Account>();

  const onSubmit = async () => {
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';

    const checkCorrectEmail = checkEmail(data, email);
    const checkCorrectPassword = checkPassword(data, password);
    if (checkLogin(data, email, password)) {
      navigate('/');
      setStorage(STORAGE_KEY.TOKEN, {
        email,
        password
      });

      setIsIncorrectEmail(!!checkCorrectEmail);
      setIsIncorrectPassword(!!checkCorrectPassword)
    } else {
      setIsIncorrectEmail(!checkCorrectEmail);
      setIsIncorrectPassword(!checkCorrectPassword)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
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
                label='Email'
                ref={(e) => {
                  register('email');
                  emailRef.current = e;
                }}
                style={((isIncorrectEmail || (errors.email)) ? InputType.error : isDirty ? InputType.info : InputType.default)}
                theme={((isIncorrectEmail || (errors.email)) ? InputTheme.error : isDirty ? InputTheme.info : InputTheme.default)}
              />
              {errors.email && <Text text={(errors.email.message)} className='form-error' />}
              {isIncorrectEmail && <Text text={ERROR_MESSAGES.EMAIL_INVALID} className='form-error' />}
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
                label='Password'
                ref={(e) => {
                  register('password');
                  passwordRef.current = e;
                }}
                style={((isIncorrectPassword || (errors.password)) ? InputType.error : isDirty ? InputType.info : InputType.default)}
                theme={((isIncorrectPassword || (errors.password)) ? InputTheme.error : isDirty ? InputTheme.info : InputTheme.default)}
              />
              {errors.password && <Text text={(errors.password.message)} className='form-error' />}
              {isIncorrectPassword && <Text text={ERROR_MESSAGES.PASSWORD_INVALID} className='form-error' />}
            </div>
          )}
        />
        <Button children='Login' type={ButtonType.tertiary} submit='submit' />
      </div>
    </form>
  );
};

export default memo(Login);
