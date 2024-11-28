### Introducing Hooks
- Hook are a new addition in React 16.8. They let us use state and other React feature without writing class.

Hooks allow you to reuse stateful logic without changing your component hierarchy.

This makes it easy to share Hooks among many components or with the community.

Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)

**Note**
```
Only for function components
```

### Hooks at a Glance
#### State Hook
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
- `useState` returns a pair: the current state value and a function that lets you update it.
- You can use the State Hook more than once in a single component
- Hooks are functions that let you “hook into” React state and lifecycle features from function components.
#### Effect Hook
- The Effect Hook, `useEffect`, adds the ability to perform side effects from a function component
- It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React class
- Effects are declared inside the component so they have access to its props and state.
- By default, React runs the effects after every render — including the first render.