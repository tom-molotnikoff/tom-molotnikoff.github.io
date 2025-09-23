import { useBlogFilter } from "./BlogFilterProvider";
import BlogIndexCard from "./BlogIndexCard";

function BlogIndexList() {
  const { filteredPosts } = useBlogFilter();

  return (
    <>
      {filteredPosts.map((post) => (
        <BlogIndexCard key={post.name} post={post} />
      ))}
    </>
  );
}

export default BlogIndexList;
