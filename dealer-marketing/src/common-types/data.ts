import { Blog } from "./blog";
import { Expert } from "./expert";

export interface DataContextProps {
  experts: Expert[];
  setExperts: Function;
  blogs: Blog[];
  setBlogs: Function;
  searchValue: string;
  setSearchValue: Function;
}
