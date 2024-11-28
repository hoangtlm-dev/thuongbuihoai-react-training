### Using the State Hook
- `useState` is a Hook that lets you add React state to function components
```
  import React, { useState } from 'react';

  function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
```

### Hooks and Function Components
```
  const Example = (props) => {
    // You can use Hooks here!
    return <div />;
  }

  // or

  function Example(props) {
    // You can use Hooks here!
    return <div />;
  }
```