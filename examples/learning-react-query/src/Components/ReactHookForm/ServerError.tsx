import axios from "axios";
import { useForm } from "react-hook-form";

const ServerError = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm({
    criteriaMode: 'all',
  });
  const onSubmit = async () => {
    const response = await axios.get('https://63183dc9f6b281877c66cbe0.mockapi.io')
    if ((response as any).statusCode > 200) {
        setError('root.serverError', {
          type: (response as any).statusCode,
        })
    }
  }

  return (
    <>
    <h2>Example with Server Error</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Last Name</label>
      <input {...register("lastName")} />
      {(errors as any).root?.serverError.type === 400 && <p>server response message</p>}
      <button>submit</button>
    </form>
    </>
  );
};

export default ServerError;