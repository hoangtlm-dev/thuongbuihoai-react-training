import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface FormInputs {
  singleErrorInput: string;
  multipleErrorInput: string;
}

const ExampleErrorMessage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({
    criteriaMode: "all",
  });
  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Example with Single Error Message</h2>
        <input
          {...register("singleErrorInput", { required: "This is required." })}
        />
        <ErrorMessage errors={errors} name="singleErrorInput" />

        <ErrorMessage
          errors={errors}
          name="singleErrorInput"
          render={({ message }) => <p>{message}</p>}
        />

        <input type="submit" />
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Example with multiple error message</h2>
        <input
          {...register("multipleErrorInput", {
            required: "This is required.",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email is invalid",
            },
            maxLength: {
              value: 10,
              message: "This input exceed maxLength.",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="multipleErrorInput"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          }
        />

        <input type="submit" />
      </form>
    </>
  );
};

export default ExampleErrorMessage;
