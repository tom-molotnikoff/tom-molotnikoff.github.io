import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BlogPost } from "./Blog";
import { TypographyH3, TypographyP } from "@/components/typography";
import { Link } from "react-router";

interface BlogIndexCardProps {
  post: BlogPost;
}

function BlogIndexCard({ post }: BlogIndexCardProps) {
  const { name, frontmatter } = post;
  return (
    <Link to={`/blog/${name}`} className="w-full group">
      <Card
        className="w-full bg-card hover:shadow-lg hover:bg-muted/90 hover:scale-[1.01] transition-transform"
        data-testid="blog-post-card"
      >
        <CardHeader>
          <CardTitle data-testid="blog-post-title">
            <TypographyH3 className="group-hover:underline transition-all">
              {frontmatter.title}
            </TypographyH3>
          </CardTitle>
          <CardDescription>{frontmatter.date}</CardDescription>
          <CardDescription
            className="text-sm text-muted-foreground"
            data-testid="blog-post-tags"
          >
            {frontmatter.tags?.join(", ")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TypographyP>{frontmatter.description}</TypographyP>
        </CardContent>
      </Card>
    </Link>
  );
}

export default BlogIndexCard;
