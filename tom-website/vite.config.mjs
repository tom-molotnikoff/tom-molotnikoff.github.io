/// <reference types="vitest/config" />
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
const options = {
  theme: "dracula",
  keepBackground: false,
  defaultLang: "plaintext"
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [{
    enforce: "pre",
    ...mdx({
      jsxImportSource: "react",
      remarkPlugins: [remarkFrontmatter,
      // parses YAML frontmatter,
      remarkGfm,
      // support for github flavored markdown (tables, task lists, strikethrough, etc)
      [remarkMdxFrontmatter, {
        name: "frontmatter"
      }] // exposes it as an export
      ],
      rehypePlugins: [[rehypePrettyCode, options]]
    })
  }, react({
    include: /\.(jsx|js|mdx|md|tsx|ts)$/
  }), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  base: "/",
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});