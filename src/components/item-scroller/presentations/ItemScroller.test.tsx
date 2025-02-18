import { ItemScroller } from "@/components/item-scroller/presentations/ItemScroller";
import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";

describe("ItemScroller", () => {
  beforeAll(() => {
    window.getComputedStyle = vi.fn().mockImplementation(() => ({
      getPropertyValue: () => vi.fn(),
    }));
  });

  it("Renders children inside SimpleBarReact", () => {
    render(<ItemScroller />);

    const element = screen.getByRole("scrollbar");
    expect(element.className).toBe("h-full w-full bg-default");
  });
});
