import { useCollageViewer } from "@/components/collage-viewer/hooks/useCollageViewer";
import { DraggableImage } from "@/components/draggable-image/presentations/DraggableImage";
import { DndContext } from "@dnd-kit/core";
import clsx from "clsx";
import { useMemo } from "react";

export const CollageViewer = () => {
  const { items, onDragEnd } = useCollageViewer();

  const children = useMemo(() => {
    return items.map((item) => <DraggableImage key={item.id} item={item} />);
  }, [items]);

  return (
    <div
      className={clsx("bg-white", {
        hidden: items.length === 0,
      })}
      style={{
        width: 600,
        height: 600,
      }}
    >
      <div
        className={clsx(
          "grid overflow-hidden",
          "grid-cols-2",
          "gap-1",
          "w-[inherit]",
          "h-[inherit]"
        )}
      >
        <DndContext onDragEnd={onDragEnd}>{children}</DndContext>
      </div>
    </div>
  );
};
