import { useCallback, useState } from "react";
import { useMutationPostExpert } from "../../hooks/useMutate";
import { Expert } from "../../interfaces/expert";

interface ModalCreateProps {
  toggleModal: () => void;
}

const ModalManagement: React.FC<ModalCreateProps> = ({ toggleModal }) => {
  const { mutate, isLoading: isAdding } = useMutationPostExpert();
  const [newData, setNewData] = useState<Expert>();
  const [image, setImage] = useState();

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl as any);
    }
  };

  const handleAddExpert = useCallback((e: any) => {
    e.preventDefault();
    const newUser = {
      name: newData?.name,
      description: newData?.description,
      image: newData?.image
    };
    setNewData('');
    mutate(newUser as any);
    toggleModal();
  }, [newData]);

  const handleChange = (event: { target: { value: {}; name: string; } }) => {
    const value = event.target.value;
    const key = event.target.name;
    console.log('value', value);
    setNewData({ ...newData, [key]: value } as any);
  }

  return (
    <form className="form-add-expert">
      <input type="file" value={newData?.image} onChange={handleImageChange} />
      {image && <img src={image} alt="Selected" style={{ width: '200px', height: '200px' }} />}
      <input
        type="text"
        placeholder="Enter name"
        name="name"
        value={newData?.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter description"
        name="description"
        value={newData?.description}
        onChange={handleChange}
      />
      <div className="form-button">
        <button onClick={toggleModal}>Cancel</button>
        <button onClick={handleAddExpert}>
          {isAdding ? "Adding..." : "Add New Data"}
        </button>
      </div>
    </form>
  );
};

export default ModalManagement;
