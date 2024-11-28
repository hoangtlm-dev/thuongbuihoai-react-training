### Using the Effect Hook
- If you’re familiar with React class lifecycle methods, you can think of `useEffect` Hook as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined.
- Run some additional code after React has updated the DOM.

**When to use:**
  - Update DOM
  - Call API
  - Listen DOM events
  - Cleanup
     - Remove listener / Unsubscribe
     - Clear timer

```
export function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []); // Call the callback only once after the component is mounted

  return <h1>I've rendered {count} times!</h1>;
}
```
### Tip: Optimizing Performance by Skipping Effects
- In some cases, cleaning up or applying the effect after every render might create a performance problem.
- In class component, write an extra comparison with `prevProps` or `prevState` inside `componentDidUpdate`
```
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `You clicked ${this.state.count} times`;
    }
  }
```
- You can tell React to skip applying an effect if certain values haven’t changed between re-renders
```
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes
```
- This also works for effects that have a cleanup phase:
```
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, [props.friend.id]); // Only re-subscribe if props.friend.id changes
```

**Note**
- If you use this optimization, make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect.
- If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument
- If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument

### useLayoutEffect
- The signature is identical to useEffect, but it fires `synchronously` after all DOM mutations.
```
- Update state again
- Update DOM
- Call clearUp again if deps changes (sync)
- Call useLayoutEffect callback (sync)
- Re-render the UI
```
```
  // useLayoutEffect
  export function UseLayoutEffect() {
    const [count, setCount] = useState(180)

    useLayoutEffect(() => {
    if (count > 3)
      setCount(0)
    }, [count])

    const handleRun = () => {
      setCount(count + 1)
    }

    return (
      <div>
        <h1>Example useLayoutEffect</h1>
        <h3>{count}</h3>
        <button onClick={handleRun}>Run</button>
      </div>
    )
  }
```