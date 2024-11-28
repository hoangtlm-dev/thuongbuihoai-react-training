// Components
import { InputType } from '@components/common/Input';

// Helpers
import {
  checkAccount,
  checkValidationStyles
} from '@helpers/login';

// Interfaces
import { CheckType } from '@interfaces/account';

// Mocks
import { MOCK_ACCOUNTS } from '@mocks/account';

describe('Test Login', () => {
  test('checkAccount should return true for valid credentials', () => {
    expect(
      checkAccount(
        MOCK_ACCOUNTS,
        'example@gmail.com',
        '123456',
        CheckType.login
      )
    ).toBe(true);
  });

  test('checkAccount should return false for invalid credentials', () => {
    expect(
      checkAccount(MOCK_ACCOUNTS, 'example@gmail.com', '123', CheckType.login)
    ).toBe(false);
  });

  test('checkEmail should return true for existing email', () => {
    expect(
      checkAccount(MOCK_ACCOUNTS, 'example@gmail.com', '', CheckType.email)
    ).toBe(true);
  });

  test('checkEmail should return false for non-existing email', () => {
    expect(
      checkAccount(MOCK_ACCOUNTS, 'user@example.com', '', CheckType.email)
    ).toBe(false);
  });

  test('checkPassword should return true for existing password', () => {
    expect(checkAccount(MOCK_ACCOUNTS, '', '123456', CheckType.password)).toBe(
      true
    );
  });

  test('checkPassword should return false for non-existing password', () => {
    expect(checkAccount(MOCK_ACCOUNTS, '', '12', CheckType.password)).toBe(
      false
    );
  });

  test('checkValidationStyles should return the correct style and theme error', () => {
    const serverError = true;
    const rules = { type: 'required', message: 'This field is required' };
    const isDirty = true;

    const { style } = checkValidationStyles(
      serverError,
      rules,
      isDirty,
      InputType
    );
    expect(style).toBe(InputType.error);
  });

  test('checkValidationStyles should return the correct style and theme for info', () => {
    const serverError = false;
    const rules = undefined;
    const isDirty = true;

    const { style } = checkValidationStyles(
      serverError,
      rules,
      isDirty,
      InputType
    );
    expect(style).toBe(InputType.info);
  });

  test('checkValidationStyles should return the correct style and theme for default', () => {
    const serverError = false;
    const rules = undefined;
    const isDirty = false;

    const { style } = checkValidationStyles(
      serverError,
      rules,
      isDirty,
      InputType
    );
    expect(style).toBe(InputType.default);
  });
});
