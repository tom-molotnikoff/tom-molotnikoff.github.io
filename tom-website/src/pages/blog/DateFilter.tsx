import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBlogFilter } from "./BlogFilterProvider";

function DateFilter() {
  const { setDate, allPosts } = useBlogFilter();
  const months = Array.from(
    new Set(
      allPosts.map((post) =>
        post.frontmatter.date.split("-").slice(0, 2).join("-")
      )
    )
  );

  return (
    <Select
      onValueChange={setDate as (value: string) => void}
      data-testid="blog-date-filter"
    >
      <SelectTrigger className="w-[180px]" data-testid="blog-date-filter">
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
  );
}

export default DateFilter;
