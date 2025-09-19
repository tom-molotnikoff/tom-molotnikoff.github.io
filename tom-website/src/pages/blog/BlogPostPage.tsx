import { useParams } from "react-router";
import type { BlogPost } from "./Blog";
import { TypographyH4 } from "@/components/typography";
import PageMetadata from "@/meta/PageMetadata";
import BackToBlogLink from "./BackToBlogLink";
import BlogContentCard from "./BlogContentCard";
import ConnectWithMe from "../contact/ConnectWithMe";

interface BlogPostPageParams {
  posts: BlogPost[];
}

function BlogPostPage({ posts }: BlogPostPageParams) {
  const { name } = useParams();
  const post = posts.find((p) => p.name === name);

  if (!post)
    return (
      <div className={`${centeredColumnContainerClass} gap-y-15 mt-10`}>
        <TypographyH4>Post not found</TypographyH4>
        <BackToBlogLink />
      </div>
    );

  const { frontmatter } = post;
  return (
    <>
      <PageMetadata
        title={`${frontmatter.title} | Tom Molotnikoff's Personal Website`}
        description={frontmatter.description}
        keywords={`Tom Molotnikoff, blog, ${frontmatter.tags?.join(", ")}`}
        author="Tom Molotnikoff"
        url="https://tom-molotnikoff.github.io/blog"
      />

      <div className={`${centeredContainerClass}`}>
        <div
          className={`${centeredColumnContainerClass} ${blogPostContainerDimensions} gap-y-4`}
        >
          <div className={`${textAtLeftOfContainerClass}`}>
            <BackToBlogLink />
          </div>
          <BlogContentCard post={post} />
          <ConnectWithMe />
        </div>
      </div>
    </>
  );
}

const centeredContainerClass = "flex flex-1 justify-center items-center";
const textAtLeftOfContainerClass = "flex flex-1 items-start w-full";
const centeredColumnContainerClass = `${centeredContainerClass} flex-col`;
const blogPostContainerDimensions =
  "lg:max-w-5xl ml-3 mr-3 md:mr-10 md:ml-10 mt-10 mb-10 md:min-w-2xl lg:min-w-3/5";

export default BlogPostPage;
