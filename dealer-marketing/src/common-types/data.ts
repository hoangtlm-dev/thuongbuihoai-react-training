import { Blogs } from "./blog";
import { Experts } from "./expert";

export interface DataContextProps {
  experts: Experts[];
  setExperts: Function;
  blogs: Blogs[];
  setBlogs: Function;
  searchValue: string;
  setSearchValue: Function;
}
