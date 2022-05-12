import { createContext, useState } from "react";

export const LoadingContext = createContext<any>({});
const MainContext: React.FC<{children: JSX.Element[]}> = ({children}) => {
  const [isReload, setIsReload] = useState(true);
  const [filterInput, setFilterInput] = useState({});

  return (
    <LoadingContext.Provider value={{setIsReload, setFilterInput, filterInput, isReload}}>
      {children}
    </LoadingContext.Provider>
  )
}

export default MainContext;
