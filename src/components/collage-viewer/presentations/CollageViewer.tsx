import {
  onSwapItem,
  useFiles,
} from "@/components/collage-viewer/states/useFiles";
import { DraggableImage } from "@/components/draggable-image/presentations/DraggableImage";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import clsx from "clsx";
import { useMemo } from "react";

export const CollageViewer = () => {
  const { items } = useFiles();

  const children = useMemo(() => {
    return items.map((item) => <DraggableImage key={item.id} item={item} />);
  }, [items]);

  const onDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;

    if (over) {
      onSwapItem(active.id, over.id);
    }
  };

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
