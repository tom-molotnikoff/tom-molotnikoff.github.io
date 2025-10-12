import { TypographyH3, TypographyP } from "@/components/typography";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useBlogFilter } from "./BlogFilterProvider";
import BlogIndexCard from "./BlogIndexCard";

function BlogIndexList() {
  const { filteredPosts } = useBlogFilter();

  return (
    <>
      {filteredPosts.length === 0 && (
        <Card
          className="w-full hover:bg-muted/90 glass"
          data-testid="blog-post-card"
        >
          <CardHeader>
            <CardTitle>
              <TypographyH3>No posts found</TypographyH3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TypographyP>
              Try adjusting your search or filter to find what you're looking
              for.
            </TypographyP>
          </CardContent>
        </Card>
      )}

      {filteredPosts.map((post) => (
        <BlogIndexCard key={post.name} post={post} />
      ))}
    </>
  );
}

export default BlogIndexList;
