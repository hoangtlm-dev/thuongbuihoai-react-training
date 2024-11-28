import { useForm, Controller, useWatch } from "react-hook-form";

const ExampleUseWatch = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    return data;
  };

  const firstName = useWatch({
    control,
    name: "firstName",
    defaultValue: "Default First Name",
  });

  const lastName = useWatch({
    control,
    name: "lastName",
    defaultValue: "Default Last Name",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Example with useWatch</h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: "firstName is required" }}
          render={({ field }) => <input {...field} />}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: "lastName is required" }}
          render={({ field }) => <input {...field} />}
        />
      </div>

      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ExampleUseWatch;
