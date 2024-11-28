### useContext
```
const value = useContext(MyContext);
```

*Don’t forget that the argument to useContext must be the context object itself:*
- Correct: useContext(MyContext)
- Incorrect: useContext(MyContext.Consumer)
- Incorrect: useContext(MyContext.Provider)

```