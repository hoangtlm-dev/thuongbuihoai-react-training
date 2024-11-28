### Introduction
- **Zustand** is a state management library for JavaScript and React applications
#### Comparison
- Conceptually, `Zustand` and `Redux` are quite similar, both are based on an immutable state model. However, `Redux` requires your app to be wrapped in `context providers`; `Zustand` does not.
### Guides
#### Updating state
- Call the provided set function with the new state
- Can update nested state
#### Immutable state and merging
```
set((state) => ({ count: state.count + 1 }))
```

**Nested objects**
- If you have a nested object, you need to merge them explicitly
```
  import { create } from 'zustand'

  const useCountStore = create((set) => ({
    nested: { count: 0 },
    inc: () =>
      set((state) => ({
        nested: { ...state.nested, count: state.nested.count + 1 },
      })),
  }))
```

**Replace flag**
- To disable the merging behavior, you can specify a replace boolean value for set like so:
```
set((state) => newState, true)
```
### Initialize state with props
#### Store creator with `createStore`
