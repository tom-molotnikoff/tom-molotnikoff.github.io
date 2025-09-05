import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BlogPost } from "./Blog";
import { TypographyH3, TypographyP } from "@/components/typography";

interface BlogIndexPageParams {
  posts: BlogPost[];
}

function BlogIndex({ posts }: BlogIndexPageParams) {
  // display them one by one in a transition
  return (
    <div className="flex flex-1 justify-center flex-col items-center mt-10">
      <div className="flex flex-col items-start gap-y-10 ml-10 mr-10">
        {posts.map(({ name, frontmatter }) => (
          <Link to={`/blog/${name}`} key={name} className="w-full group">
            <Card className="min-w-sm md:min-w-xl lg:min-w-5xl bg-card hover:shadow-lg transition-shadow hover:bg-muted/90 hover:scale-[1.01] transition-all">
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
