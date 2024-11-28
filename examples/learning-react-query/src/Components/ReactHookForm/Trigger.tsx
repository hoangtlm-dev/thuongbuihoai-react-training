import { useForm } from "react-hook-form";

function Trigger() {
  const { register, handleSubmit, trigger, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    const isFormValid = await trigger();

    if (isFormValid) {
      console.log("Valid data:", data);
    } else {
      console.log("Invalid data. Please check the field for errors.");
    }
  };

  return (
    <>
    <h2>Example with trigger</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          {...register("Username", { required: "Username is required" })}
          type="text"
          name="username"
        />
        {errors.username && <p>{(errors as any).username.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        {/* <input
          {...register({
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email is invalid"
            },
          })}
          type="text"
          name="email"
        /> */}
        {errors.email && <p>{(errors as any).email.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default Trigger;