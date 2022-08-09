import { Blog } from "@common-types/blog";
import { DataContextProps } from "@common-types/data";
import { Expert } from "@common-types/expert";
import { createContext, useState } from "react";

const DataContext = createContext<DataContextProps>({} as DataContextProps);
const DataProvider: React.FC<{ children: JSX.Element[] | JSX.Element }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [experts, setExperts] = useState<Expert[]>([]);
  const [errorCode, setErrorCode] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");

  const value = {
    blogs,
    experts,
    setBlogs,
    errorCode,
    setExperts,
    searchValue,
    setErrorCode,
    setSearchValue,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataProvider, DataContext };
