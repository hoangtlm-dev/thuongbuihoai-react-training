import { useForm } from "react-hook-form"

const ResetField = () => {
  const {
    register,
    resetField,
    formState: { isDirty, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
    },
  })
  const handleClick = () => resetField("firstName")

  return (
    <>
    <h2>Example with Reset Field</h2>
    <form>
      <input {...register("firstName", { required: true })} />

      <p>{isDirty && "dirty"}</p>
      <p>{isValid && "valid"}</p>

      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </form>
    </>
  )
}

export default ResetField;