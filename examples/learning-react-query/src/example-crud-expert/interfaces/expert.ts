export interface Expert {
  expertId: string;
  name: string;
  slug: string;
  info: string;
  image: {
    url: string;
    alt: string;
  };
  description?: string;
};

export interface ExpertContextProps {
  errorCode: number;
  experts: Expert[];
  setExperts: (value: Expert[]) => void;
  setErrorCode: Function;
};
