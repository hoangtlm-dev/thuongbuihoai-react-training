#### Installation
```
npm install react-hook-form
```
#### Register fields
- One of the key concepts in React Hook Form is to `register your component into the hook`. This will make its `value available` for both the form `validation` and `submission`.
- **Note**: Each field is `required` to have a name as a key for the registration process.
#### Apply validation
- React Hook Form makes form validation easy by aligning with the existing HTML standard for form validation.
- List of validation rules supported:
  - required
  - min
  - max
  - minLength
  - maxLength
  - pattern
  - validate
```
<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("firstName", { required: true, maxLength: 20 })} />
  <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
  <input type="number" {...register("age", { min: 18, max: 99 })} />
  <input type="submit" />
</form>
```
#### Integrating an existing form
#### Integrating with UI libraries
#### Integrating Controlled Inputs
- **Using Component API**
- **Using Hooks API**
#### Integrating with global state
#### Handle errors
- React Hook Form provides an errors object to show you the errors in the form. errors' type will return given validation constraints
#### Integrating with services
- To integrate React Hook Form with a service, you can use the library's built-in submission handling. `<Form />` component allow you to easily send form data to an API endpoint or other service
#### Schema Validation
- We also support schema-based form validation with `Yup`, `Zod` , `Superstruct` & `Joi`, where you can pass your schema to `useForm` as an optional config
```
npm install @hookform/resolvers yup
```