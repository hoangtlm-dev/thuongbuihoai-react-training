import { Form, useForm } from "react-hook-form"

const SendData = () => {
  const { register, control } = useForm();

  return (
    <Form
      action="https://63183dc9f6b281877c66cbe0.mockapi.io/api/experts" // Send post request with the FormData
      onSuccess={() => {
        alert("Your application is updated.")
      }}
      onError={() => {
        alert("Submission has failed.")
      }}
      control={control}
    >
      <input {...register("name", { required: true })} />
      <button>Submit</button>
    </Form>
  )
};

export default SendData;
