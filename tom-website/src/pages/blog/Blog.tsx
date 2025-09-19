import { Route, Routes } from "react-router";
import BlogPostPage from "./BlogPostPage";
import BlogIndex from "./BlogIndexPage";

const mdxFiles = import.meta.glob("../../content/blog-posts/*.mdx", {
  eager: true,
});

export type BlogPost = {
  name: string | undefined;
  frontmatter: Record<string, any>;
  Content: React.ComponentType;
};

function Blog() {
  if (!mdxFiles) return <div>No blog posts found</div>;

  const posts: BlogPost[] = Object.entries(mdxFiles)
    .map(([path, mod]: any) => ({
      name: path.split("/").pop()?.replace(".mdx", ""),
      frontmatter: mod.frontmatter,
      Content: mod.default,
    }))
    .filter((post) => post.frontmatter.published !== false)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <>
      <Routes>
        <Route path=":name" element={<BlogPostPage posts={posts} />} />
        <Route index element={<BlogIndex posts={posts} />} />
      </Routes>
    </>
  );
}

export default Blog;
