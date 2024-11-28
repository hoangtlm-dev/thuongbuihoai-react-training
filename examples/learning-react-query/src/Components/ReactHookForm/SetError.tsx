import * as React from "react"
import { useForm } from "react-hook-form"

type FormInputs = {
  username: string;
  firstName: string;
  lastName: string;
}

const SetError = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data)
  }

  // React.useEffect(() => {
  //   setError("username", {
  //     type: "manual",
  //     message: "Dont Forget Your Username Should Be Cool!",
  //   })
  // }, [setError]);

  React.useEffect(() => {
    setError("lastName", {
      types: {
        required: "This is required",
        minLength: "This is minLength",
      },
    })
  }, [setError])

  return (
    <>
    <h2>Example with single error</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} />
      {errors.username && <p>{errors.username.message}</p>}
      <input type="submit" />
    </form>
    <br />
    <h2>Example with multiple Errors</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username</label>
      <input {...register("username")} />
      {errors.username && <p>{errors.username.message}</p>}
      <label>First Name</label>
      <input {...register("firstName")} />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      <button
        type="button"
        onClick={() => {
          const inputs = [
            {
              type: "manual",
              name: "username",
              message: "Double Check This",
            },
            {
              type: "manual",
              name: "firstName",
              message: "Triple Check This",
            },
          ]

          inputs.forEach(({ name, type, message }) => {
            setError((name as any), { type, message })
          })
        }}
      >
        Trigger Name Errors
      </button>
      <input type="submit" />
    </form>
    <h2>Example with single field error</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Last Name</label>
      <input {...register("lastName")} />
      {errors.lastName && errors.lastName.types && (
        <p>{errors.lastName.types.required}</p>
      )}
      {errors.lastName && errors.lastName.types && (
        <p>{errors.lastName.types.minLength}</p>
      )}
      <input type="submit" />
    </form>
    </>
  )
}

export default SetError;