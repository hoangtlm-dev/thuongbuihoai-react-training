import { Categories, CategoryContext } from "@common-types/category";
import { createContext, useMemo, useState } from "react";

const CategoriesContext = createContext<CategoryContext>({} as CategoryContext);
const CategoriesProvider: React.FC<{ children: JSX.Element[] | JSX.Element }> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState<{}>();
  const [categories, setCategories] = useState<Categories[]>([]);

  const value = useMemo(
    () => ({
      searchValue,
      setSearchValue,
      categories,
      setCategories,
    }),
    [searchValue]
  );

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};

export { CategoriesProvider, CategoriesContext };
