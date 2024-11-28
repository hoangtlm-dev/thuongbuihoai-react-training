import { useForm } from "react-hook-form";

const Input = () => {
  const {
    register,
    handleSubmit,
    // Read the formState before render to subscribe the form state through the Proxy
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log('check value', errors, isDirty, isSubmitting, touchedFields, submitCount);

  return (
    <>
    <h2>Check value</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("test")} />
      <input type="submit" />
    </form>
    </>
  );
}

export default Input;