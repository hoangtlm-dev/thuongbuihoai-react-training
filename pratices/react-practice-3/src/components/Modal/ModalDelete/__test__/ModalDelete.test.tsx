import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalDelete from "../ModalDelete";

describe("Modal create component", () => {
  const hideModalDelete = jest.fn();
  const deleteProduct = jest.fn();

  test("should render modal delete component", () => {
    const { getByTestId } = render(
      <ModalDelete
        id={""}
        hideModalDelete={() => {}}
        deleteProduct={() => {}}
      />
    );
    expect(getByTestId("modal-delete")).toBeInTheDocument();
  });

  test("should hide modal delete when click No", () => {
    render(
      <ModalDelete
        id={""}
        hideModalDelete={hideModalDelete}
        deleteProduct={() => {}}
      />
    );
    const hideModal = screen.getByText("No");
    fireEvent.click(hideModal);
    expect(hideModalDelete).toHaveBeenCalled();
  });

  test("should delete product when click Yes", () => {
    render(
      <ModalDelete
        id={""}
        hideModalDelete={() => {}}
        deleteProduct={deleteProduct}
      />
    );
    const hideModal = screen.getByText("Yes");
    fireEvent.click(hideModal);
    expect(deleteProduct).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <ModalDelete
        id={""}
        hideModalDelete={() => {}}
        deleteProduct={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
