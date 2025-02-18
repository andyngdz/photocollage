import { TwoImagesHorizontal } from "@/components/collage-layouts/presentations/two-images/presentations/TwoImagesHorizontal";
import { useCollageViewer } from "@/components/collage-viewer/hooks/useCollageViewer";
import { DraggableImage } from "@/components/draggable-image/presentations/DraggableImage";
import { DndContext } from "@dnd-kit/core";
import clsx from "clsx";

export const CollageViewer = () => {
  const { items, onDragEnd } = useCollageViewer();

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
      <DndContext onDragEnd={onDragEnd}>
        <TwoImagesHorizontal
          items={items}
          onRender={(item) => <DraggableImage key={item.id} item={item} />}
        />
      </DndContext>
    </div>
  );
};
