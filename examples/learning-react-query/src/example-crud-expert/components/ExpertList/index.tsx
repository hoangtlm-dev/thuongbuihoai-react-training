import { useCallback, useState } from "react";
import { useExperts } from "../../hooks/useQuery";
import { Expert } from "../../interfaces/expert";
import ModalManagement from "../Modal";

const ExpertList = () => {
  const { data, isLoading } = useExperts();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <>
    <div className="expert-list">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data?.map((expert: Expert) => (
            <div className="expert-item">
              <img src={expert?.image.url} alt={expert.image.alt} className="expert-image" />
              <h2 className="expert-name">{expert.name}</h2>
              <p className="expert-description">{expert.description}</p>
            </div>
          ))}
        </>
      )}
      {open && <ModalManagement toggleModal={handleOpenModal} />}
    </div>
    <button onClick={handleOpenModal}>Add new Expert</button>
    </>
  );
};

export default ExpertList;
