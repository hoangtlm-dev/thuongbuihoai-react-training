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
}

export interface ExpertContextProps {
  experts: Expert[];
  errorCode: number;
  setExperts: Function;
  setErrorCode: Function;
  handleUpdateExperts: Function;
}

export enum ExpertContentType {
  border = "border",
  grid = "grid",
}
