/// <reference types="vitest/config" />
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname = import.meta.dirname;

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: "dracula",
  keepBackground: false,
  defaultLang: "plaintext",
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        jsxImportSource: "react",
        remarkPlugins: [
          // parses YAML frontmatter
          remarkFrontmatter,
          // github flavored markdown (tables, task lists, strikethrough, etc)
          remarkGfm,
          // exposes the frontmatter as an export
          [remarkMdxFrontmatter, { name: "frontmatter" }],
        ],
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      }),
    },
    react({
      include: /\.(jsx|js|mdx|md|tsx|ts)$/,
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(dirname, "./src"),
    },
  },
  base: "/",
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // Runs tests for the stories defined in the Storybook config
          // https://storybook.js.org/docs/writing-tests/integrations/vitest-addon
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
