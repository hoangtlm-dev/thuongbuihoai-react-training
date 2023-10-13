import { useCallback, useState } from "react";
import { useMutationPostExpert } from "../../hooks/useMutate";
import { useNotificationStores } from "../../stores/notification";
import { Expert } from "../../interfaces/expert";
import { useExpertStore } from "../../stores/expert";

interface ModalCreateProps {
  toggleModal: () => void;
}

const ModalManagement: React.FC<ModalCreateProps> = ({ toggleModal }) => {
  const { mutate, isLoading: isAdding } = useMutationPostExpert();
  const [newUserName, setNewUserName] = useState("");

  const handleAddExpert = useCallback((expert: Expert) => {
    console.log("run here");
    const newData = {
      name: expert.name,
      description: expert.description,
    };
    mutate(newData);
  }, []);

  return (
    <form className="form-add-expert">
      <input
        type="text"
        placeholder="Enter name"
        name="name"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter description"
        name="description"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
      />
      <div className="form-button">
        <button onClick={toggleModal}>Cancel</button>
        <button onClick={() => handleAddExpert}>
          {isAdding ? "Adding..." : "Add New Data"}
        </button>
      </div>
    </form>
  );
};

export default ModalManagement;
