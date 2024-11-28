### Function and Class Components
- The simplest way to define a component is to write a JavaScript function:
```
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  // or

  class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
### Rendering a Component
- When React `sees` an element representing a `user-defined` component, `it passes JSX` attributes and children to this component as a single object. We call this object `props`.
```
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  const element = <Welcome name="Sara" />;
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(element);
```
### Composing Components
```
 function Button(props) {
    return <button>My button, {props.color}</button>;
  }

  function App() {
    return (
      <div>
        <Button color="red" />
        <Button color="green" />
        <Button color="black" />
      </div>
    );
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
```
### Extracting Components
```
  function formatDate(date) {
    return date.toLocaleDateString();
  }

  function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
              src={props.author.avatarUrl}
              alt={props.author.name} />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };

  ReactDOM.render(
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author} />,
    document.getElementById('root')
  );
```
=> We can do it like this
```
  function formatDate(date) {
    return date.toLocaleDateString();
  }

  function Avatar(props) {
    return (
      <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name} />
    );
  }

  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }

  function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };
  ReactDOM.render(
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author} />,
    document.getElementById('root')
  );
```
