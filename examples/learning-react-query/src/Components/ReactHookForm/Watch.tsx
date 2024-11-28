import { useForm, useFieldArray } from 'react-hook-form';

type FormValues = {
  test: {
    firstName: string
    lastName: string
  }[]
}

const ExampleWatch = () => {
  const { register, watch, control, handleSubmit } = useForm();

  const categoryValue = watch('category');

  const onSubmit = (data: any) => {
    alert(`Categories: ${data.category}`);
  };

  const { fields, remove, append } = useFieldArray({
    name: "subjects",
    control,
  })
  const onSubmitArray = (data: FormValues) => console.log(data)

  return (
    <div>
      <h2>Example with Watch</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className='categories'>Categories:</label>
          <input {...register('category')} type="text" name="category" />
        </div>

        {categoryValue === 'Coffee' && <p>Choose your favorite coffee</p>}
        {categoryValue === 'Tea' && <p>Choose your favorite tea</p>}
        {categoryValue === 'Juice' && <p>Choose your favorite juice</p>}

        <button type="submit">Submit</button>
      </form>

      <h2>Example with useFieldArray</h2>
      <form onSubmit={handleSubmit(onSubmitArray as any)}>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <input
                defaultValue={(field as any).name}
                {...register(`subjects.${index}.name`)}
              />
              <button type="button" onClick={() => remove(index)}>
                Remove
              </button>
            </div>
          )
        })}
      <button
        type="button"
        onClick={() =>
          append({
            name: "",
          })
        }
      >
        Append
      </button>
    </form>
    </div>
  );
}

export default ExampleWatch;
