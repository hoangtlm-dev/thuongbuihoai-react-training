import { create } from "zustand";

// define types for state values and actions separately
type State = {
  salmon: number;
  tuna: number;
};

type Actions = {
  addSalmon: (qty: number) => void;
  addTuna: (qty: number) => void;
  reset: () => void;
};

// define the initial state
const initialState: State = {
  salmon: 0,
  tuna: 0
};

// create store
const useSlice = create<State & Actions>()((set, get) => ({
  ...initialState,
  addSalmon: (qty: number) => {
    set({ salmon: get().salmon + qty });
  },
  addTuna: (qty: number) => {
    set({ tuna: get().tuna + qty });
  },
  reset: () => {
    set(initialState);
  }
}));

const RestState = () => {
  const salmon = useSlice((state) => state.salmon);
  const addSalmon = useSlice((state) => state.addSalmon);
  const tuna = useSlice((state) => state.tuna);
  const addTuna = useSlice((state) => state.addTuna);
  const reset = useSlice((state) => state.reset);

  return (
    <div className="App">
      <h2>Example with reset state</h2>
      {salmon}
      <button type="button" onClick={() => addSalmon(1)}>
        Add Salmon
      </button>
      <hr />
      {tuna}
      <button type="button" onClick={() => addTuna(1)}>
        Add Tuna
      </button>
      <hr />
      <button type="button" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
}

export default RestState;
