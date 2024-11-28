### Handling Events
- React events are named using `camelCase`, rather than lowercase.
- With JSX you `pass a function` as the event handler, rather than a string.
```
  // The HTML
  <button onclick="activateLasers()">
    Activate Lasers
  </button>

  // React
  <button onClick={activateLasers}>
    Activate Lasers
  </button>
```
- Another difference is that you `cannot return false` to prevent default behavior in React.
```
// The HTML
  <form onsubmit="console.log('You clicked submit.'); return false">
    <button type="submit">Submit</button>
  </form>

  // React
  function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }

    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }
```
- When using `React`, you generally `don’t need to call addEventListener` to add listeners to a DOM element after it is created
### Passing Arguments to Event Handlers
- Inside a loop, it is common to want to pass an extra parameter to an event handler
```
  // Arrow functions
  <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
  // Function.prototype.bind
  <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```