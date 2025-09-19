import type { BlogPost } from "./Blog";
import { TypographyH2, TypographyH3 } from "@/components/typography";
import { useIsMobile } from "@/hooks/use-mobile";
import PageMetadata from "@/meta/PageMetadata";
import { BlogFilterProvider } from "./BlogFilterProvider";
import TagFilter from "./TagFilter";
import DateFilter from "./DateFilter";
import SearchFilter from "./SearchFilter";
import BlogIndexList from "./BlogIndexList";
import ConnectWithMe from "../contact/ConnectWithMe";
import { pageContainerClass } from "../Pages";

interface BlogIndexPageParams {
  posts: BlogPost[];
}

function BlogIndex({ posts }: BlogIndexPageParams) {
  const isMobile = useIsMobile();

  return (
    <>
      <PageMetadata
        title="Blog | Tom Molotnikoff's Personal Website"
        description="Read blog posts by Tom Molotnikoff on software development, distributed computing, cloud platforms, technology insights and home automation. Stay up to date with the latest articles and tutorials."
        keywords="Tom Molotnikoff, blog, software development, distributed computing, cloud computing, tutorials, technology, programming, personal website, raspberry pi, home automation, iot, smart home, docker"
        author="Tom Molotnikoff"
        url="https://tom-molotnikoff.github.io/blog"
      />
      <BlogFilterProvider initialPosts={posts}>
        <div className={pageContainerClass}>
          <div className={blogIndexListContainerClass}>
            <TypographyH2>Blog Posts</TypographyH2>
            <div
              className={
                isMobile
                  ? searchAndFilterContainerClass
                  : searchAndFilterContainerClassDesktop
              }
            >
              <TypographyH3>Search:</TypographyH3>
              <SearchFilter />
            </div>

            <div
              className={
                isMobile
                  ? searchAndFilterContainerClass
                  : searchAndFilterContainerClassDesktop
              }
            >
              <TypographyH3>Filters:</TypographyH3>
              <TagFilter />
              <DateFilter />
            </div>
            <BlogIndexList />
          </div>
          <ConnectWithMe />
        </div>
      </BlogFilterProvider>
    </>
  );
}

const searchAndFilterContainerClass = "flex flex-1 flex-col w-full gap-y-3";
const searchAndFilterContainerClassDesktop = "flex flex-1 gap-4";
const blogIndexListContainerClass =
  "w-full min-w-[320px] max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto flex flex-col items-start gap-y-10 ml-3 mr-3 md:ml-10 md:mr-10";

export default BlogIndex;
