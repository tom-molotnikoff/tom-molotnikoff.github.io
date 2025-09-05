// this is so vscode and typescript understand the mdx imports
// and the frontmatter export injected by remark-mdx-frontmatter
declare module "*.mdx" {
  import * as React from "react";
  export const frontmatter: Record<string, any>;
  const MDXComponent: React.FC;
  export default MDXComponent;
}
