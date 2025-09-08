import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BlogPost } from "./Blog";
import {
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/typography";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";
import { Input } from "@/components/ui/input";

interface BlogIndexPageParams {
  posts: BlogPost[];
}

function BlogIndex({ posts }: BlogIndexPageParams) {
  const [currentlyShownPosts, setCurrentlyShownPosts] =
    useState<BlogPost[]>(posts);

  function handleDateChange(date: string) {
    if (date === "all") {
      setCurrentlyShownPosts(posts);
    } else {
      const filteredPosts = [...posts].filter((post) => {
        const yearAndMonth = post.frontmatter.date.split("-").slice(0, 2);
        return yearAndMonth.join("-") == date;
      });
      setCurrentlyShownPosts(filteredPosts);
    }
  }

  function handleTagChange(tag: string) {
    if (tag === "all") {
      setCurrentlyShownPosts(posts);
    } else {
      const filteredPosts = [...posts].filter((post) => {
        return post.frontmatter.tags?.includes(tag);
      });
      setCurrentlyShownPosts(filteredPosts);
    }
  }

  const months = Array.from(
    new Set(
      posts.map((post) =>
        post.frontmatter.date.split("-").slice(0, 2).join("-")
      )
    )
  );

  const tags = Array.from(
    new Set(posts.flatMap((post) => post.frontmatter.tags ?? []))
  );

  const isMobile = useIsMobile();

  return (
    <div className="flex flex-1 justify-center flex-col items-center mt-10 mb-10 ml-3 mr-3">
      <div className="w-full min-w-[320px] max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto flex flex-col items-start gap-y-10 ml-3 mr-3 md:ml-10 md:mr-10">
        <TypographyH2>Blog Posts</TypographyH2>
        <div
          className={
            isMobile
              ? `flex flex-1 flex-col w-full gap-y-3`
              : `flex flex-1 gap-4`
          }
        >
          <TypographyH3>Search:</TypographyH3>
          <Input
            className="w-[180px]"
            placeholder="Search posts..."
            onChange={(e) => {
              const query = e.target.value.toLowerCase();
              if (query === "") {
                setCurrentlyShownPosts(posts);
              } else {
                const filteredPosts = posts.filter((post) => {
                  return (
                    post.frontmatter.title.toLowerCase().includes(query) ||
                    post.frontmatter.description
                      .toLowerCase()
                      .includes(query) ||
                    post.frontmatter.tags?.some((tag: string) =>
                      tag.toLowerCase().includes(query)
                    )
                  );
                });
                setCurrentlyShownPosts(filteredPosts);
              }
            }}
          />
        </div>

        <div
          className={
            isMobile
              ? `flex flex-1 flex-col w-full gap-y-3`
              : `flex flex-1 gap-4`
          }
        >
          <TypographyH3>Filters:</TypographyH3>
          <Select onValueChange={handleTagChange as (value: string) => void}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tags</SelectItem>
              {tags.map((tag) => {
                return (
                  <SelectItem value={tag} key={tag}>
                    {tag}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <Select onValueChange={handleDateChange as (value: string) => void}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              {months.map((date) => {
                return (
                  <SelectItem value={date} key={date}>
                    {date.replace("-", "/")}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        {currentlyShownPosts.map(({ name, frontmatter }) => (
          <Link to={`/blog/${name}`} key={name} className="w-full group">
            <Card className="w-full bg-card hover:shadow-lg hover:bg-muted/90 hover:scale-[1.01] transition-transform">
              <CardHeader>
                <CardTitle>
                  <TypographyH3 className="group-hover:underline transition-all">
                    {frontmatter.title}
                  </TypographyH3>
                </CardTitle>
                <CardDescription>{frontmatter.date}</CardDescription>
                <CardDescription className="text-sm text-muted-foreground">
                  {frontmatter.tags?.join(", ")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyP>{frontmatter.description}</TypographyP>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogIndex;
