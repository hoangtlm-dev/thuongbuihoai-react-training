import { useForm } from "react-hook-form";

const HandleError = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <form className="form-input" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: true })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName?.type === "required" && (
        <p className="show-error" role="alert">First name is required</p>
      )}

      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
      />
      {errors.mail && <p className="show-error" role="alert">{(errors as any).mail.message}</p>}

      <input type="submit" />
    </form>
  )
}

export default HandleError;
