import { createContext, useMemo, useState } from "react";
import { Blog, BlogContextProps } from "@self-types/blog";

const BlogContext = createContext<BlogContextProps>({} as BlogContextProps);
const BlogProvider: React.FC<{ children: JSX.Element[] | JSX.Element }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [errorCode, setErrorCode] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");

  const blogList = useMemo(() => {
    return searchValue
      ? blogs?.filter((blog: Blog) =>
          blog.title.toLowerCase().includes(searchValue.toLowerCase()),
        )
      : blogs;
  }, [blogs, searchValue]);

  const handleUpdateBlogs = (errorCode: number, blogs: Blog[]) => {
    if (errorCode) {
      setErrorCode(errorCode);
    } else {
      setBlogs(blogs);
    }
  };

  const value = {
    blogs,
    setBlogs,
    blogList,
    errorCode,
    searchValue,
    setErrorCode,
    setSearchValue,
    handleUpdateBlogs,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export { BlogProvider, BlogContext };
