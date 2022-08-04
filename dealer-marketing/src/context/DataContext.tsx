import { Blogs } from "@common-types/blog";
import { DataContextProps } from "@common-types/data";
import { Experts } from "@common-types/expert";
import { createContext, useState } from "react";

const DataContext = createContext<DataContextProps>({} as DataContextProps);
const DataProvider: React.FC<{ children: JSX.Element[] | JSX.Element }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<Blogs[]>([]);
  const [experts, setExperts] = useState<Experts[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const value = {
    blogs,
    experts,
    setBlogs,
    setExperts,
    searchValue,
    setSearchValue,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataProvider, DataContext };
