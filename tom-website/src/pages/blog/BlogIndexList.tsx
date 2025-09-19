import { Link } from "react-router";
import { useBlogFilter } from "./BlogFilterProvider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TypographyH3, TypographyP } from "@/components/typography";

function BlogIndexList() {
  const { filteredPosts } = useBlogFilter();

  return (
    <>
      {filteredPosts.map(({ name, frontmatter }) => (
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
    </>
  );
}

export default BlogIndexList;
