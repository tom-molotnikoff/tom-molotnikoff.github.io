import { Input } from "@/components/ui/input";
import { useBlogFilter } from "./BlogFilterProvider";

function SearchFilter() {
  const { search, setSearch } = useBlogFilter();

  return (
    <Input
      className="w-[180px]"
      placeholder="Search posts..."
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      value={search}
      data-testid="blog-search-input"
    />
  );
}

export default SearchFilter;
