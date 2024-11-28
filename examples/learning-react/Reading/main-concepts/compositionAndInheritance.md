### Composition vs Inheritance
#### Containment
- React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components
```
  function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

  function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }

  ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
  );
```
- **This lets other components pass arbitrary children to them by nesting the JSX**
### Specialization
- In React, this is also achieved by composition, where a more `specific` component renders a more `generic`
one and configures it with props:
```
  function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

  function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
  }

  function WelcomeDialog() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
    );
  }

  ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
  );
```
### Inheritance
- Inheritance allows the app to do the coupling between the parent-child component and reuse properties such as state values and function in its child components.

- React does not use inheritance except in the initial component class, which extends from the react package.
```
  class ParentClass extends React.Component {
    constructor(props) {
      super(props);
      this.callMe = this.callMe.bind(this);
    }

    // ParentClass function
    callMe() {
      console.log("This is a method from parent class");
    }

    render() {
      return false;
    }
  }

  class Example extends ParentClass {
    constructor() {
      super();
    }
    render() {
      this.callMe();
      return false;
    }
  }
```