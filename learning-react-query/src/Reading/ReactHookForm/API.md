### useForm
- **</> useForm: UseFormProps**
- `useForm` is a custom hook for managing forms with ease. It takes one object as optional argument

| Option                        | Descriptions                                                       |
| :---------------------------- | :----------------------------------------------------------------- |
| mode                          | Validation strategy before submitting behaviour.                   |
| reValidateMode                | Validation strategy after submitting behaviour.                    |
| defaultValues                 | Default values for the form.                                       |
| values                        | Reactive values to update the form values.                         |
| resetOptions                  | Option to reset form state update while updating new form values.  |
| criteriaMode                  | Display all validation errors or one at a time.                    |
| shouldFocusError              | Enable or disable built-in focus management.                       |
| delayError                    | Delay error from appearing instantly.                              |
| shouldUseNativeValidation     | Use browser built-in form constraint API.                          |
| shouldUnregister              | Enable and disable input unregister after unmount.                 |

#### Props
- **mode**: onChange | onBlur | onSubmit | onTouched | all = 'onSubmit'
- **reValidateMode**: onChange | onBlur | onSubmit = 'onChange' 
- **defaultValues**: FieldValues | () => Promise<FieldValues>
- **values**: FieldValues
- **resetOptions**: KeepStateOptions
- **context**: object
  - This context object is mutable and will be injected into the resolver's second argument or Yup validation's context object.
- **criteriaMode**: firstError | all
  - When set to firstError (default), only the first error from each field will be gathered.
  - When set to all, all errors from each field will be gathered.
- **shouldFocusError**: boolean = true
  - Only registered fields with a ref will work. Custom registered inputs do not apply.
  ```
  register('test') // doesn't work
  ```
  - The focus order is based on the register order.
- delayError: number
- shouldUnregister: boolean = false
### register
- **</> register: (name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })**
- This method allows you to register an input or select element and apply validation rules to React Hook Form

| Input Name                    | Submit Result                         |
| :---------------------------- | :-----------------------------------  |
| register("firstName")         | {firstName: 'value'}                  |
| register("name.firstName")    | {name: { firstName: 'value' }}        |
| register("name.firstName.0")  | {name: { firstName: [ 'value' ] }}    |

- **Return**
```
const { onChange, onBlur, name, ref } = register('firstName'); 
// include type check against field path with the name you have supplied.

<input
  onChange={onChange} // assign onChange event 
  onBlur={onBlur} // assign onBlur event
  name={name} // assign name prop
  ref={ref} // assign ref prop
/>
// same as above
<input {...register('firstName')} />
```
- **Rules**
  - name is required and unique (except native radio and checkbox). Input name supports both dot and bracket syntax, which allows you to easily create nested form fields.
  - name can neither start with a number nor use number as key name. Please avoid special characters as well.
  - we are using dot syntax only for typescript usage consistency, so bracket [] will not work for array form value.
```
register('test.0.firstName'); // ✅
register('test[0]firstName'); // ❌
```
- disabled input will result in an undefined form value. If you want to prevent users from updating the input, you can use readOnly or disable the entire `<fieldset />`
- To produce an array of fields, input names should be followed by a dot and number. **For example: test.0.data**
```
register('test', { required: true });
register('test', {}); // ❌
register('test', undefined); // ❌
register('test', { required: false });  // ✅
```
### unregister
- **</> unregister: (name: string | string[], options) => void**
- This method allows you to `unregister` a single input or an array of inputs. It also provides a second optional argument to keep state after `unregistering` an input.

| Type       | Input Name                            | Value            |
| :--------- | :------------------------------------ | :--------------- |
| string     | unregister("yourDetails")             | {}               |
| string     | unregister("yourDetails.firstName")   | { lastName: '' } |
| string[]   | unregister(["yourDetails.lastName"])  | ''               |

### formState
- **</> formState: Object**
- This object contains information about the entire form state. It helps you to keep on track with the user's interaction with your form application.
- **Return**
  - isDirty (boolean): Set to true after the user modifies any of the inputs.
    - **Important**: Make sure to provide all inputs' defaultValues at the useForm, so hook form can have a single source of truth to compare whether the form is dirty.
    ```
    const {
      formState: { isDirty, dirtyFields },
      setValue,
    } = useForm({ defaultValues: { test: "" } });

    // isDirty: true
    setValue('test', 'change')
    
    // isDirty: false because there getValues() === defaultValues
    setValue('test', '')
    ```
    - Do not support custom object, Class or File object.
  - dirtyFields (object): compare against the defaultValues.
    - **Important**: Make sure to provide defaultValues at the useForm, so hook form can have a single source of truth to compare each field's dirtiness.
    - Dirty fields `will not represent` as isDirty formState, because dirty fields are marked field dirty at field level rather the entire form. If you want to determine the entire form state use `isDirty` instead.
  - isLoading (boolean): true if the form is currently loading async default values.
    - **Important**: this prop is only applicable to async defaultValues
    ```
    const {
      formState: { isLoading } 
    } = useForm({ 
      defaultValues: async () => await fetch('/api') 
    });
    ```
  - isValid (boolean): Set to true if the form doesn't have any errors.
  - isValidating (boolean): Set to true during validation.
  - errors (object): An object with field errors. There is also an `ErrorMessage` component to retrieve error message easily.
- **Rules**
- Pay attention to the logical operator when subscription to formState.
```
  // ❌ formState.isValid is accessed conditionally,
  // so the Proxy does not subscribe to changes of that state
  return <button disabled={!formState.isDirty || !formState.isValid} />;

  // ✅ read all formState values to subscribe to changes
  const { isDirty, isValid } = formState;
  return <button disabled={!isDirty || !isValid} />;
```

### watch
- **</> watch: (names?: string | string[] | (data, options) => void) => unknown**
- This method will watch specified inputs and return their values.
- **Rules**
```
  - When defaultValue is not defined, the first render of watch will return undefined because it is called before register. It's recommend to provide defaultValues at useForm to avoid this behaviour, but you can set the inline defaultValue as the second argument.
  - When both defaultValue and defaultValues are supplied, defaultValue will be returned.
  - This API will trigger re-render at the root of your app or form, consider using a callback or the useWatch api if you are experiencing performance issues.
```

### handleSubmit
- **</> handleSubmit: ((data: Object, e?: Event) => Promise<void>, (errors: Object, e?: Event) => void) => Promise<void>**
- This function will receive the form data if form validation is successful
```
  SubmitHandler: (data: Object, e?: Event) => Promise<void> A successful callback.
  SubmitErrorHandler: (errors: Object, e?: Event) => Promise<void> An error callback.
```
- **Rules**
  - You can easily submit form asynchronously with handleSubmit.
```
  handleSubmit(onSubmit)()

  // You can pass an async function for asynchronous validation.
  handleSubmit(async (data) => await fetchAPI(data))
```
  - `handleSubmit` function will `not swallow errors` that occurred `inside your onSubmit callback`, so we recommend you to try and catch inside async request and handle those errors gracefully for your customers.

### trigger
- **"trigger"** is a function used to activate error checking of a field (field) or check the entire form (form) and return information about the errors of the fields.
### control
- This object contains methods for registering components into React Hook Form.
- **Important**: do not access any of the properties inside this object directly. It's for internal usage only.
### From
```
  <Form
    action="/api"
    method="post" // default to post
    onSubmit={() => {}} // function to be called before the request
    onSuccess={() => {}} // valid response
    onError={() => {}} // error response
    validateStatus={(status) => status >= 200} // validate status code
  />
```
- **Rules**
  - If want to prepare or omit submission data, please use handleSubmit or onSubmit.
  ```
    const { handleSubmit, control } = useForm();
    const onSubmit =(data) => callback(prepareData(data))
    <form onSubmit={handleSubmit(onSubmit)} />
    // or
    <Form
      onSubmit={({ data }) => {
        console.log(data)
      }}
    />
  ```
### useController
- **(props?: UseControllerProps) => { field: object, fieldState: object, formState: object }**
- This custom hook powers `Controller`. Additionally, it shares the same props and methods as Controller. It's useful for creating reusable Controlled input.
- **Tips**
  - It's important to be aware of each prop's responsibility when working with external controlled components, such as `MUI`, `AntD`, `Chakra UI`. Its job is to spy on the input, report, and set its value.
    - `onChange`: send data back to hook form
    - `onBlur`: report input has been interacted (focus and blur)
    - `value`: set up input initial and updated value
    - `ref`: allow input to be focused with error
    - `name`: give input an unique name
### useFormContext
- This custom hook allows you to access the form context. `useFormContext` is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop.
- This hook will return all the useForm return methods and props.
```
  const methods = useForm()
  <FormProvider {...methods} /> // all the useForm return props
  const methods = useFormContext() // retrieve those props
```
- **Rules:** ***You need to wrap your form with the `FormProvider` component for `useFormContext` to work properly.***
### FormProvider
- This component will host context object and allow consuming component to subscribe to context and use useForm props and methods.
- **Rules:** ***Avoid using nested FormProvider***
### useWatch
- Behaves similarly to the watch API, however, this will isolate re-rendering at the custom hook level and potentially result in better performance for your application.
- **Rules:**
  - The initial return value from useWatch will always return what's inside of defaultValue or defaultValues from useForm.
  - The only difference between `useWatch` and `watch` is at the root (useForm) level or the custom hook level update.
  - useWatch's execution order matters, which means if you update a form value before the subscription is in place, then the value updated will be ignored.
  ```
  setValue("test", "data")
  useWatch({ name: "test" }) // ❌ subscription is happened after value update, no update received
  useWatch({ name: "example" }) // ✅ input value update will be received and trigger re-render
  setValue("example", "data")
  ```
- Compare watch and useWatch
  - **watch**:
    - `watch` is a function provided by React Hook Form.
    - You use `watch` outside of components to monitor the values of fields in the form.
    - You pass the name of the field you want to watch to `watch`, and it returns the value of that field.
    ```
      const { watch } = useForm();
      const fieldValue = watch("fieldName");
    ```
  - **useWatch**
    - `useWatch` is a hook that you import from the React Hook Form library.
    - You use `useWatch` inside functional components to monitor the values of fields.
    - You provide control (the form control object) and the name of the field to `useWatch`.
    - `useWatch` provides the ability to watch the value of a field without triggering the entire form to re-render when the value changes. This can help optimize performance and avoid unnecessary form re-renders.
  - In summary, both `watch` and `useWatch` allow you to monitor the values of fields in a form, but `useWatch` is a hook that provides deeper integration and offers the ability to watch values without re-triggering the entire form.
### useFormState
- This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level.
- It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm.
- Using this hook can reduce the re-render impact on large and complex form application.
### ErrorMessage
```
npm install @hookform/error-message
```
### useFieldArray
- Custom hook for working with Field Arrays (dynamic form). The motivation is to provide better user experience and performance
- **Rules**
  - `useFieldArray` automatically generates a unique identifier named id which is used for key prop.
  ```
  // ✅ correct:
  {fields.map((field, index) => <input key={field.id} ... />)}

  // ❌ incorrect:
  {fields.map((field, index) => <input key={index} ... />)}
  ```
  - It's recommend to not stack actions one after another.
  ```
  onClick={() => {
    append({ test: 'test' });
    remove(0);
  }}
  // ✅ Better solution: the remove action is happened after the second render
  React.useEffect(() => {
    remove(0);
  }, [remove])

  onClick={() => {
    append({ test: 'test' });
  }}
  ```
- Typescript:
  - When register input name, you will have to cast them as `const`
  ```
  <input key={field.id} {...register(`test.${index}.test` as const)} />
  ```
  - for nested field array, you will have to cast the field array by its name
  ```
  const { fields } = useFieldArray({ name: `test.${index}.keyValue` as 'test.0.keyValue' });
  ```