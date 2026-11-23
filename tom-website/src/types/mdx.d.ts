// this is so vscode and typescript understand the mdx imports
// and the frontmatter export injected by remark-mdx-frontmatter
declare module "*.mdx" {
  import type * as React from "react";
  import type { BlogFrontmatter } from "@/types/blog";
  export const frontmatter: BlogFrontmatter;
  const MDXComponent: React.FC;
  export default MDXComponent;
}
