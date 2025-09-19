import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBlogFilter } from "./BlogFilterProvider";

function TagFilter() {
  const { setTag, allPosts } = useBlogFilter();
  const tags = Array.from(
    new Set(allPosts.flatMap((post) => post.frontmatter.tags ?? []))
  );

  return (
    <Select onValueChange={setTag as (value: string) => void}>
      <SelectTrigger className="w-[180px]" data-testid="blog-tag-filter">
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
  );
}

export default TagFilter;
