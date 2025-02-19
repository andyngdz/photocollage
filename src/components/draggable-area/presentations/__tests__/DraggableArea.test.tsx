import { DraggableArea } from "@/components/draggable-area/presentations/DraggableArea";
import { render } from "@testing-library/react";

jest.mock("@/components/draggable-area/hooks/useDraggableImage", () => ({
  useDraggableImage: () => ({
    setNodeRef: jest.fn(),
    style: { transform: "translate3d(0, 0, 0)" },
    listeners: { onMouseDown: jest.fn() },
    attributes: { "aria-label": "draggable" },
  }),
}));

describe("DraggableArea", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <DraggableArea id="test-id">
        <div>Test Content</div>
      </DraggableArea>
    );

    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("applies correct base classes", () => {
    const { container } = render(
      <DraggableArea id="test-id">
        <div>Test Content</div>
      </DraggableArea>
    );

    const draggableDiv = container.firstChild as HTMLElement;
    expect(draggableDiv).toHaveClass("h-full", "w-full", "overflow-hidden");
  });

  it("receives correct props from useDraggableImage hook", () => {
    const { container } = render(
      <DraggableArea id="test-id">
        <div>Test Content</div>
      </DraggableArea>
    );

    const draggableDiv = container.firstChild as HTMLElement;
    expect(draggableDiv).toHaveStyle({ transform: "translate3d(0, 0, 0)" });
    expect(draggableDiv).toHaveAttribute("aria-label", "draggable");
  });
});
