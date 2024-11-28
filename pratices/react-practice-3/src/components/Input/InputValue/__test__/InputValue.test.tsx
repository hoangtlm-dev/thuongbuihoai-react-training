import ModalUpdate from "@components/Modal/ModalUpdate/ModalUpdate";
import { PRODUCT_MOCKING } from "@__mocks__/constants/product";
import { fireEvent, render } from "@testing-library/react";
import InputValue from "../InputValue";

describe("Input value component", () => {
  const onChangeValue = jest.fn();
  const setup = () => {
    const utils = render(
      <ModalUpdate
        product={PRODUCT_MOCKING}
        hideModalUpdate={() => {}}
        deleteImage={() => {}}
        updateProductDetail={() => {}}
      />
    );
    const input = utils.getByTestId("change-value") as HTMLInputElement;
    return {
      input,
      ...utils,
    };
  };
  test("Should onChange value when input value", async () => {
    render (
      <InputValue onChange={onChangeValue} />
    );
    const { input } = setup();
    fireEvent.change(input, { target: { value: "Cheese pocket" } });
    expect(input.value).toBe("Cheese pocket");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<InputValue />);
    expect(asFragment()).toMatchSnapshot();
  });
});