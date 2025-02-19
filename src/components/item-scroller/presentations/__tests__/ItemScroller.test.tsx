import { ItemScroller } from "@/components/item-scroller/presentations/ItemScroller";
import { render, screen } from "@testing-library/react";

describe("ItemScroller", () => {
  beforeAll(() => {
    window.getComputedStyle = jest.fn().mockImplementation(() => ({
      getPropertyValue: () => jest.fn(),
    }));
  });

  it("Renders children inside SimpleBarReact", () => {
    render(<ItemScroller />);

    const element = screen.getByRole("scrollbar");
    expect(element.className).toBe("h-full w-full bg-default");
  });
});
