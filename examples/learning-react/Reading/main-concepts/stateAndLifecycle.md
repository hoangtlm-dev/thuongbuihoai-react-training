- In this section, we will learn how to make the Clock component truly reusable and encapsulated
```
  const root = ReactDOM.createRoot(document.getElementById('root'));

  function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }

  setInterval(tick, 1000);
```
### Converting a Function to a Class
```
  class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }

  setInterval(tick, 1000);
```
### Adding Local State to a Class
- We will move the date from `props` to `state` in three steps:
1. Replace `this.props.date` with `this.state.date` in the `render()` method:
2. Add a `class constructor` that assigns the initial `this.state`:
3. Remove the date prop from the <Clock /> element:
```
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
```
### Adding Lifecycle Methods to a Class
```
  const root = ReactDOM.createRoot(document.getElementById('root'));
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    // The componentDidMount() method runs after the component output has been rendered to the DOM
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    // Tear down the timer in the componentWillUnmount() lifecycle method:
    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
```
### Using State Correctly
- **Do Not Modify State Directly**
```
  // Wrong
  this.state.comment = 'Hello';

  // Correct
  this.setState({comment: 'Hello'});
```
- **State Updates May Be Asynchronous**
- React may batch multiple setState() calls into a single update for performance.
```
  // Wrong
  this.setState({
    counter: this.state.counter + this.props.increment,
  });

  // Correct
  this.setState((state, props) => ({
    counter: state.counter + props.increment
  }));

  - Arrow function
  // Correct
  this.setState(function(state, props) {
    return {
      counter: state.counter + props.increment
    };
  });
```
### State Updates are Merged
- When you call `setState()`, React `merges` the object you provide into the current state