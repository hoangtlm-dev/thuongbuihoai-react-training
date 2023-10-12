import { createContext, useState } from "react";
import { Expert, ExpertContextProps } from "../interfaces/expert";
import { useExpertStore } from "../stores/expert";

const ExpertContext = createContext<ExpertContextProps>(
  {} as ExpertContextProps,
);
const ExpertProvider: React.FC<{ children: JSX.Element[] | JSX.Element }> = ({
  children,
}) => {
  const { experts, setExperts } = useExpertStore();
  const [errorCode, setErrorCode] = useState<number>(0);

  const handleUpdateExperts = (errorCode: number, experts: Expert[]) => {
    if (errorCode) {
      setErrorCode(errorCode);
    } else {
      setExperts(experts);
    }
  };

  const value = {
    experts,
    errorCode,
    setExperts,
    setErrorCode,
    handleUpdateExperts,
  };

  return (
    <ExpertContext.Provider value={value}>{children}</ExpertContext.Provider>
  );
};

export { ExpertProvider, ExpertContext };
