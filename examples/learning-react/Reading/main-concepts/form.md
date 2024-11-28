### Forms
#### Controlled Components
- In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input.
- In React, mutable state is typically kept in the state property of components, and only updated with `setState()`.
- We can combine the two by making the React state be the `single source of truth`. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.
```
  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );
```
### Handling Multiple Inputs
- When you need to handle multiple controlled input elements, you can add a `name attribute` to each element and let the handler function choose what to do based on the value of `event.target.name`.
```
  class Login extends React.Component {
    constructor () {
      super();
      this.state = {
        email: '',
        password: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange (evt) {
      // check it out: we get the evt.target.name (which will be either "email" or "password")
      // and use it to target the key on our `state` object with the same name, using bracket syntax
      this.setState({ [evt.target.name]: evt.target.value });
    }

    render () {
      return (
        <form>
          <label>Email</label>
          <input type="text" name="email" onChange={this.handleChange} />

          <label>Password</label>
          <input type="password" name="password" onChange={this.handleChange} />
        </form>
      );
    }
  }
```
### Controlled Input Null Value
- If you’ve specified a value but the input is still editable, you `may have` accidentally set value to `undefined` or `null`.
```
ReactDOM.createRoot(mountNode).render(<input value="hi" />);

setTimeout(function() {
  ReactDOM.createRoot(mountNode).render(<input value={null} />);
}, 1000);
```