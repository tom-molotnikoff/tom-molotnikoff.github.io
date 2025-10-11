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
import PageContainer from "../PageContainer";

interface BlogIndexPageParams {
  posts: BlogPost[];
}

function SearchAndFilterContainer({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const searchAndFilterContainerClass = "flex flex-1 flex-col w-full gap-y-3";
  const searchAndFilterContainerClassDesktop = "flex flex-1 gap-4";
  const className = isMobile
    ? searchAndFilterContainerClass
    : searchAndFilterContainerClassDesktop;

  return <div className={className}>{children}</div>;
}

function BlogIndex({ posts }: BlogIndexPageParams) {
  const blogIndexListContainerClass =
    "w-full min-w-[320px] max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto flex flex-col items-start gap-y-10 ml-3 mr-3 md:ml-10 md:mr-10";
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
        <PageContainer>
          <div className={blogIndexListContainerClass}>
            <TypographyH2>Blog Posts</TypographyH2>
            <div className="glass p-3 flex flex-1 flex-col gap-y-5 h-full">
              <SearchAndFilterContainer>
                <TypographyH3>Search:</TypographyH3>
                <SearchFilter />
              </SearchAndFilterContainer>

              <SearchAndFilterContainer>
                <TypographyH3>Filters:</TypographyH3>
                <TagFilter />
                <DateFilter />
              </SearchAndFilterContainer>
            </div>
            <BlogIndexList />
          </div>
          <ConnectWithMe />
        </PageContainer>
      </BlogFilterProvider>
    </>
  );
}

export default BlogIndex;
