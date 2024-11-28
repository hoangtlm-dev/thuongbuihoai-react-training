### useRef
```
const refContainer = useRef(initialValue);
```
- `useRef` is like a “box” that can hold a mutable value in its .current property.
- `useRef` doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render.

### useImperativeHandle
```
useImperativeHandle(ref, createHandle, [deps])
```
- `useImperativeHandle` customizes the instance value that is exposed to parent components when using ref
```
  function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      }
    }));
    return <input ref={inputRef} ... />;
  }
  FancyInput = forwardRef(FancyInput);
```

### useDebugValue
```
useDebugValue(value)
```
- `useDebugValue` can be used to display a label for custom hooks in React DevTools.
```
  function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    // ...

    // Show a label in DevTools next to this Hook
    // e.g. "FriendStatus: Online"
    useDebugValue(isOnline ? 'Online' : 'Offline');

    return isOnline;
  }
```

**Tip**
- We don’t recommend adding debug values to every custom Hook.

### useTransition
Returns a stateful value for the pending state of the transition, and a function to start it.

startTransition lets you mark updates in the provided callback as transitions
```
  function App() {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);
    
    function handleClick() {
      startTransition(() => {
        setCount(c => c + 1);
      })
    }

    return (
      <div>
        {isPending && <Spinner />}
        <button onClick={handleClick}>{count}</button>
      </div>
    );
  }
```
### useId
- `useId` is a hook for generating unique IDs that are stable across the server and client

- **useId is not for generating keys in a list. Keys should be generated from your data**
```
  function Checkbox() {
    const id = useId();
    return (
      <>
        <label htmlFor={id}>Do you like React?</label>
        <input id={id} type="checkbox" name="react"/>
      </>
    );
  };

  // multiple IDs in the same component
  function NameFields() {
    const id = useId();
    return (
      <div>
        <label htmlFor={id + '-firstName'}>First Name</label>
        <div>
          <input id={id + '-firstName'} type="text" />
        </div>
        <label htmlFor={id + '-lastName'}>Last Name</label>
        <div>
          <input id={id + '-lastName'} type="text" />
        </div>
      </div>
    );
  }
```
### useReducer
```
const [state, dispatch] = useReducer(reducer, initialArg, init);
```
- An alternative to useState, `useReducer` is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one

### useCallback
```
  const memoizedCallback = useCallback(
    () => {
      doSomething(a, b);
    },
    [a, b],
  );
```
- Returns a memoized callback.
- `useCallback` will return a memoized version of the callback that only changes if one of the dependencies has changed.

```
useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
```
### useMemo
```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
- Returns a memoized value.
- Pass a “create” function and an array of dependencies.
- `useMemo` will only recompute the memoized value when one of the dependencies has changed.