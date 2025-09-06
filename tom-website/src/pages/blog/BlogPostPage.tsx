import { Link, useParams } from "react-router";
import type { BlogPost } from "./Blog";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "./mdx-components";
import { TypographyH4 } from "@/components/typography";

interface BlogPostPageParams {
  posts: BlogPost[];
}

function BlogPostPage({ posts }: BlogPostPageParams) {
  const { name } = useParams();
  const post = posts.find((p) => p.name === name);

  if (!post)
    return (
      <div className="flex flex-col flex-1 items-center justify-center gap-y-15 mt-10">
        <TypographyH4>Post not found</TypographyH4>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
        >
          <span aria-hidden="true">←</span>
          <p className="underline underline-offset-4 hover:font-bold ">
            Back to all posts
          </p>
        </Link>
      </div>
    );

  const { frontmatter, Content } = post;
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex flex-1 justify-center flex-col items-center lg:max-w-5xl ml-3 mr-3 md:mr-10 md:ml-10 mt-10 mb-10 md:min-w-2xl lg:min-w-3/5">
        <div className="flex flex-1 items-start w-full mb-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <span aria-hidden="true">←</span>
            <p className="underline underline-offset-4 hover:font-bold ">
              Back to all posts
            </p>
          </Link>
        </div>
        <div className="mdx-content flex flex-col w-full bg-card rounded-xl shadow-lg p-6 space-y-4">
          <h1 className="text-3xl font-bold mb-2">{frontmatter.title}</h1>
          <p className="text-muted-foreground mb-4">{frontmatter.date}</p>
          <MDXProvider components={mdxComponents}>
            <Content />
          </MDXProvider>
        </div>
      </div>
    </div>
  );
}

export default BlogPostPage;
