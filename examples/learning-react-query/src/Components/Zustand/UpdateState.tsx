import { create } from 'zustand';

type State = {
  firstName: string;
  lastName: string;
};

type Action = {
  updateFirstName: (firstName: State['firstName']) => void;
  updateLastName: (lastName: State['lastName']) => void;
};

// Create your store, which includes both state and (optionally) actions
const usePersonStore = create<State & Action>((set) => ({
  firstName: '',
  lastName: '',
  updateFirstName: firstName => set(() => ({ firstName: firstName })),
  updateLastName: lastName => set(() => ({ lastName: lastName })),
}));

// In consuming app
const ExampleUpdateState = () => {
  // "select" the needed state and actions, in this case, the firstName value
  // and the action updateFirstName
  const firstName = usePersonStore((state) => state.firstName);
  const updateFirstName = usePersonStore((state) => state.updateFirstName);
  const lastName = usePersonStore((state) => state.lastName);
  const updateLastNames = usePersonStore((state) => state.updateLastName)

  return (
    <main>
      <h2>Example with Update state</h2>
      <label>
        First name
        <input
          // Update the "firstName" state
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
        <input
          // Update the "lastName" state
          onChange={(e) => updateLastNames(e.currentTarget.value)}
          value={lastName}
        />
      </label>

      <p>
        Hello, <strong>{firstName} {lastName}!</strong>
      </p>
    </main>
  );
};

export default ExampleUpdateState;
