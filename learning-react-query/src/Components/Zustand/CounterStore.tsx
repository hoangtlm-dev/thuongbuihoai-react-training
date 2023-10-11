import { create } from "zustand";

type CounterType = {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useCounterStore = create<CounterType>((set) => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
}));

const ExampleCounterStore = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <h2>Example with Zustand</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default ExampleCounterStore;
