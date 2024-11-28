import { useForm, Controller, useFormState } from "react-hook-form";

const ExampleUseFormState = () => {
  const { handleSubmit, control } = useForm();
  const { isSubmitting, errors, dirtyFields } = useFormState({
    control
  });

  const onSubmit = (data: any) => {
    console.log('data', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Example with useFormState</h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: "firstName is required" }}
          render={({ field }) => <input {...field} />}
        />
        {errors.firstName && <p>{(errors as any).firstName.message}</p>}
      </div>

      <p>Send status: {isSubmitting ? "Sending" : "Unsent"}</p>
      <p>Edited fields: {Object.keys(dirtyFields).join(", ")}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ExampleUseFormState;
