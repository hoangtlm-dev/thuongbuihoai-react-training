import { useForm, Controller } from "react-hook-form";

const ExampleController = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    return data;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Example with Controller</h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: "FirstName is required" }}
          render={({ field }) => <input {...field} />}
        />
        {errors.firstName && <p>{(errors as any).firstName.message}</p>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: "LastName is required" }}
          render={({ field }) => <input {...field} />}
        />
        {errors.lastName && <p>{(errors as any).lastName.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ExampleController;
