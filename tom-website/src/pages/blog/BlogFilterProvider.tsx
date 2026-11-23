import { useMemo, useState } from "react";
import type { BlogPost } from "./Blog";
import { BlogFilterContext, type BlogFilterContextType } from "./use-blog-filter";

interface BlogFilterProviderProps {
  children: React.ReactNode;
  initialPosts: BlogPost[];
}

function filterPosts(
  posts: BlogPost[],
  date: string,
  tag: string,
  search: string
): BlogPost[] {
  let filtered = posts;
  if (date && date !== "all") {
    filtered = filtered.filter((post) => {
      const yearAndMonth = post.frontmatter.date.split("-").slice(0, 2);
      return yearAndMonth.join("-") == date;
    });
  }
  if (tag && tag !== "all") {
    filtered = filtered.filter((post) => post.frontmatter.tags?.includes(tag));
  }
  if (search && search.trim() !== "") {
    const lowerSearch = search.toLowerCase();
    filtered = filtered.filter(
      (post) =>
        post.frontmatter.title.toLowerCase().includes(lowerSearch) ||
        post.frontmatter.description?.toLowerCase().includes(lowerSearch) ||
        post.frontmatter.tags?.some((tag) =>
          tag.toLowerCase().includes(lowerSearch)
        )
    );
  }
  return filtered;
}

export function BlogFilterProvider({
  children,
  initialPosts,
}: BlogFilterProviderProps) {
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("");
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(
    () => filterPosts(initialPosts, date, tag, search),
    [initialPosts, date, tag, search]
  );

  const value: BlogFilterContextType = {
    date,
    setDate,
    tag,
    setTag,
    search,
    setSearch,
    filteredPosts,
    allPosts: initialPosts,
  };

  return (
    <BlogFilterContext.Provider value={value}>
      {children}
    </BlogFilterContext.Provider>
  );
}
