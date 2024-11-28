import "@testing-library/jest-dom";
import mockAxios from "@__mocks__/axios";
import user from "@testing-library/user-event";
import ModalCreate from "../ModalCreate";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useState } from "react";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/categories";
import { CATEGORIES_URL } from "@constants/url";
import { getData } from "@helpers/apiHandle";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Modal create component", () => {
  const hideModalCreate = jest.fn();
  const handleCreateProduct = jest.fn();
  const someValues = [{ name: "cheese pocket" }];
  const setup = () => {
    const utils = render(
      <ModalCreate
        hideModalCreate={() => {}}
        createProduct={() => {}}
      />
    );
    const input = utils.getByTestId("change-value") as HTMLInputElement;
    return {
      input,
      ...utils,
    };
  };

  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(
      jest.requireActual("react").useState
    );
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test("should change value when onChang input", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "Cheese pocket" } });
    expect(input.value).toBe("Cheese pocket");
  });

  test("should change file image when onChang input", async () => {
    const { getByTestId, queryByTestId } = render(
      <ModalCreate
        hideModalCreate={() => {}}
        createProduct={() => {}}
      />
    );
    const str = JSON.stringify(someValues);
    const blob = new Blob([str]);
    const file = new File([blob], "db.json", {
      type: "application/JSON",
    });
    File.prototype.text = jest.fn().mockResolvedValueOnce(str);
    const input = getByTestId("change-file");
    user.upload(input, file);
    await waitFor(() =>
      expect(queryByTestId("after-change-file")).toBeTruthy()
    );
  });

  test("get categories item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: CATEGORY_MOCKING_LIST });
    const result = await getData(CATEGORIES_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(CATEGORIES_URL);
    expect(result).toEqual(CATEGORY_MOCKING_LIST);
  });

  test("should render modal create component", () => {
    const { getByTestId } = render(
      <ModalCreate
        hideModalCreate={() => {}}
        createProduct={() => {}}
      />
    );
    expect(getByTestId("modal-create")).toBeInTheDocument();
  });

  test("should hide modal create when click Cancel", () => {
    render(
      <ModalCreate
        hideModalCreate={hideModalCreate}
        createProduct={() => {}}
      />
    );
    const cancelBtn = screen.getByText("Cancel");
    fireEvent.click(cancelBtn);
    expect(hideModalCreate).toHaveBeenCalled();
  });

  test("should create product when click Submit", () => {
    render(
      <ModalCreate
        hideModalCreate={() => {}}
        createProduct={handleCreateProduct}
      />
    );
    const submitBtn = screen.getByText("Submit");
    fireEvent.click(submitBtn);
    expect(submitBtn).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <ModalCreate
        hideModalCreate={() => {}}
        createProduct={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
