import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogFilterProvider } from "@/pages/blog/BlogFilterProvider";
import DateFilter from "@/pages/blog/DateFilter";
import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";
import { useState } from "react";

const mockPosts = [
  {
    name: "test-post",
    frontmatter: {
      date: "2025-10-12",
      title: "Test Post",
      description: "A test post",
      tags: ["test"],
    },
    Content: () => null,
  },
  {
    name: "another-post",
    frontmatter: {
      date: "2025-09-01",
      title: "Another Post",
      description: "Another test",
      tags: ["blog"],
    },
    Content: () => null,
  },
];

const meta: Meta<typeof DateFilter> = {
  title: "Custom/DateFilter",
  component: DateFilter,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [setSelectedDate] = useState("");
    return (
      <BlogFilterProvider
        initialPosts={mockPosts}
        // @ts-ignore: allow passing setDate for testing
        setDate={setSelectedDate}
      >
        <div className="glass p-3 flex flex-1 flex-col gap-y-5 h-full">
          <DateFilter />
        </div>
      </BlogFilterProvider>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("blog-date-filter"));
    const option = await within(document.body).findByText("2025/10");
    await userEvent.click(option);
    // Assert the selectedDate state is updated in the DOM
    expect(canvas.getByTestId("blog-date-filter").textContent).toBe("2025/10");
  },
};
