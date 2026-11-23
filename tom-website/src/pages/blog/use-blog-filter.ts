import { createContext, useContext } from "react";
import type { BlogPost } from "./Blog";

export interface BlogFilterContextType {
  date: string;
  setDate: (date: string) => void;
  tag: string;
  setTag: (tag: string) => void;
  search: string;
  setSearch: (search: string) => void;
  filteredPosts: BlogPost[];
  allPosts: BlogPost[];
}

export const BlogFilterContext = createContext<
  BlogFilterContextType | undefined
>(undefined);

export function useBlogFilter(): BlogFilterContextType {
  const context = useContext(BlogFilterContext);

  if (context === undefined)
    throw new Error("useBlogFilter must be used within a BlogFilterProvider");

  return context;
}
