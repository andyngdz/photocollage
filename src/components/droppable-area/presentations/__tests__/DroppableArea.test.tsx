import { IItemProps } from "@/components/collage-viewer/states/useFiles";
import { DroppableArea } from "@/components/droppable-area/presentations/DroppableArea";
import { render } from "@testing-library/react";

jest.mock("@/components/droppable-area/hooks/useDroppableArea", () => ({
  useDroppableArea: () => ({
    setNodeRef: jest.fn(),
  }),
}));

describe("DroppableArea", () => {
  const mockItem: IItemProps = {
    id: "test-id",
    file: new File([], "image.jpg"),
  };

  it("renders children correctly", () => {
    const { getByText } = render(
      <DroppableArea item={mockItem}>
        <div>Test Child</div>
      </DroppableArea>
    );

    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("renders with correct classes", () => {
    const { container } = render(
      <DroppableArea item={mockItem}>
        <div>Test Content</div>
      </DroppableArea>
    );

    const droppableDiv = container.firstChild as HTMLElement;
    expect(droppableDiv).toHaveClass("h-full", "w-full");
  });
});
