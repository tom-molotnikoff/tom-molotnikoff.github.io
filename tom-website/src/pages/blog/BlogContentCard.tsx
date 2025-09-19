import { mdxComponents } from "@/types/mdx-components";
import type { BlogPost } from "./Blog";
import { MDXProvider } from "@mdx-js/react";

interface BlogContentCardProps {
  post: BlogPost;
}

function BlogContentCard({ post }: BlogContentCardProps) {
  const { frontmatter, Content } = post;
  return (
    <div className={`${blogPostTextContainerClass}`}>
      <h1 className={`${blogPostTitleClass}`}>{frontmatter.title}</h1>
      <p className={`${blogPostDateClass}`}>{frontmatter.date}</p>
      <MDXProvider components={mdxComponents}>
        <Content />
      </MDXProvider>
    </div>
  );
}

const blogPostTextContainerClass =
  "mdx-content rounded-xl shadow-lg p-6 space-y-4";
const blogPostTitleClass = "text-3xl font-bold mb-2";
const blogPostDateClass = "text-muted-foreground mb-4";

export default BlogContentCard;
