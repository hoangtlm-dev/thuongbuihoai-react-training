// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import Text,
{
  SizeType,
  ThemeType
} from '@common/Text';

describe('Text component', () => {
  test('Should render Text component with size is normal', () => {
    const { getByTestId } = render(
      <Text text='Sopa Management' type={SizeType.normal} />
    );
    const text = getByTestId('text');
    expect(text).toBeInTheDocument();
  });

  test('Should render Text component with size is regular', () => {
    const { getByTestId } = render(
      <Text text='Sopa Management' type={SizeType.regular} />
    );
    const text = getByTestId('text');
    expect(text).toBeInTheDocument();
  });

  test('Should render Text component with size is medium', () => {
    const { getByTestId } = render(
      <Text text='Sopa Management' type={SizeType.medium} />
    );
    const text = getByTestId('text');
    expect(text).toBeInTheDocument();
  });

  test('Should render Text component with size is extraMedium', () => {
    const { getByTestId } = render(
      <Text text='Sopa Management' type={SizeType.extraMedium} />
    );
    const text = getByTestId('text');
    expect(text).toBeInTheDocument();
  });

  test('Should render Text component with size is large', () => {
    const { getByTestId } = render(
      <Text text='Sopa Management' type={SizeType.large} />
    );
    const text = getByTestId('text');
    expect(text).toBeInTheDocument();
  });

  test('Should render Text component with theme is dark', () => {
    const { getByTestId } = render(
      <Text text='Sopa Management' type={ThemeType.dark} />
    );
    const text = getByTestId('text');
    expect(text).toBeInTheDocument();
  });

  test('Should render Text component with theme is light', () => {
    const { getByTestId } = render(
      <Text text='Sopa Management' type={ThemeType.light} />
    );
    const text = getByTestId('text');
    expect(text).toBeInTheDocument();
  });

  test('Should render Text component with theme is highlightPrimary', () => {
    const { getByTestId } = render(
      <Text text='Sopa Management' type={ThemeType.highlightPrimary} />
    );
    const text = getByTestId('text');
    expect(text).toBeInTheDocument();
  });

  test('Should render Text component with theme is highlightSecondary', () => {
    const { getByTestId } = render(
      <Text text='Sopa Management' type={ThemeType.highlightSecondary} />
    );
    const text = getByTestId('text');
    expect(text).toBeInTheDocument();
  });

  test('Should render Text component with default type', () => {
    const { getByTestId } = render(<Text text='Sopa Management' />);
    const text = getByTestId('text');
    expect(text).toBeInTheDocument();
  });

  test('Should render Text component with default value', () => {
    const { getByTestId } = render(<Text />);
    const text = getByTestId('text');
    expect(text).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    const { container } = render(
      <Text text='Sopa Management' type={SizeType.normal} />
    );
    expect(container).toMatchSnapshot();
  });
});
