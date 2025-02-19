import { FileSelector } from "@/components/file-selector/presentations/FileSelector";
import { render } from "@testing-library/react";

describe("FileSelector", () => {
  it("Renders FileSelector", async () => {
    const result = render(<FileSelector onFileChange={jest.fn()} />);

    const button = await result.findByText("Add images");
    expect(button).toBeDefined();

    const input = result.getAllByTestId("file-picker");
    expect(input).toBeDefined();
  });
});
