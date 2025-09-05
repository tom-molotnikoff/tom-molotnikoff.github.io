import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        jsxImportSource: "react",
        remarkPlugins: [
          remarkFrontmatter, // parses YAML frontmatter,
          remarkGfm, // support for github flavored markdown (tables, task lists, strikethrough, etc)
          [remarkMdxFrontmatter, { name: "frontmatter" }], // exposes it as an export
        ],
      }),
    },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
});
