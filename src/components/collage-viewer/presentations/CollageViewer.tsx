import { useFiles } from "@/components/collage-viewer/states/useFiles";
import { DraggableImage } from "@/components/draggable-image/presentations/DraggableImage";
import clsx from "clsx";
import { useMemo } from "react";

export const CollageViewer = () => {
  const { files } = useFiles();

  const children = useMemo(() => {
    return files.map((file) => <DraggableImage key={file.name} file={file} />);
  }, [files]);

  return (
    <div
      className={clsx("p-2", "bg-default-50", {
        hidden: files.length === 0,
      })}
      style={{
        maxWidth: 800,
        maxHeight: 600,
      }}
    >
      <div
        className={clsx(
          "grid overflow-hidden",
          "grid-cols-2",
          "gap-1",
          "w-full",
          "h-full"
        )}
      >
        {children}
      </div>
    </div>
  );
};
