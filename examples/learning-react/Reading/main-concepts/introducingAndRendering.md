### Introducing JSX
```
  // It is call JSX
  const element = <h1>Hello World</h1>;
```
### Embedding Expressions in JSX
```
  const name = 'Hoai Thuong';
  const element = <h1>Hello, {name}</h1>;
```
- You `can put any valid` JavaScript expression inside the curly braces in JSX
```
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Hoai',
    lastName: 'Thuong'
  };

  const element = (
    <h1>
      Hello, {formatName(user)}
    </h1>
  );
```
### JSX is an Expression Too
- After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.
```
  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
```
### JSX Represents Objects
- Babel compiles JSX down to `React.createElement()` calls.
```
  const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );

  // or
  const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );
```
- `React.createElement()` performs a few checks to help you write bug-free code but essentially `it creates` an object like this:
```
  // Note: this structure is simplified
  const element = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  };
```
### Rendering Elements
- To render a React element, first pass the DOM element to `ReactDOM.createRoot()`, then pass the React element to `root.render()`:
```
  const element = <h1>Hello, world</h1>;
  const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  root.render(element);
```
### Updating the Rendered Element
- React elements are `immutable`. Once you create an element, you `can’t change` its children or attributes
- The only way to `update the UI` is to `create a new element`, and pass it to `root.render()`.
```
  const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    root.render(element);
  }

  setInterval(tick, 1000);
```