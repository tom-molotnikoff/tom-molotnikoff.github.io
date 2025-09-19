import { createContext, useContext, useEffect, useState } from "react";
import type { BlogPost } from "./Blog";

interface BlogFilterProviderProps {
  children: React.ReactNode;
  initialPosts: BlogPost[];
}

interface BlogFilterContextType {
  date: string;
  setDate: (date: string) => void;
  tag: string;
  setTag: (tags: string) => void;
  search: string;
  setSearch: (search: string) => void;
  filteredPosts: BlogPost[];
  setFilteredPosts: (posts: BlogPost[]) => void;
  allPosts: BlogPost[];
}

const BlogFilterContext = createContext({} as BlogFilterContextType);

export function BlogFilterProvider({
  children,
  initialPosts,
}: BlogFilterProviderProps) {
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);
  const [allPosts] = useState<BlogPost[]>(initialPosts);

  useEffect(() => {
    let posts = allPosts;
    if (date && date !== "all") {
      posts = posts.filter((post) => {
        const yearAndMonth = post.frontmatter.date.split("-").slice(0, 2);
        return yearAndMonth.join("-") == date;
      });
    }
    if (tag && tag !== "all") {
      posts = posts.filter((post) => {
        return post.frontmatter.tags?.includes(tag);
      });
    }
    if (search && search.trim() !== "") {
      const lowerSearch = search.toLowerCase();
      posts = posts.filter((post) => {
        return (
          post.frontmatter.title.toLowerCase().includes(lowerSearch) ||
          post.frontmatter.description?.toLowerCase().includes(lowerSearch) ||
          post.frontmatter.tags?.some((tag: string) =>
            tag.toLowerCase().includes(lowerSearch)
          )
        );
      });
    }
    setFilteredPosts(posts);
  }, [date, tag, search, initialPosts]);

  const initialContext: BlogFilterContextType = {
    date,
    setDate,
    tag,
    setTag,
    search,
    setSearch,
    filteredPosts,
    setFilteredPosts,
    allPosts: initialPosts,
  };

  return (
    <BlogFilterContext.Provider value={initialContext}>
      {children}
    </BlogFilterContext.Provider>
  );
}

export function useBlogFilter() {
  return useContext(BlogFilterContext);
}
