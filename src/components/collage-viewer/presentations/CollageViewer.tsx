import { useCollageLayoutsSelector } from "@/components/collage-layouts-selector/hooks/useCollageLayoutsSelector";
import { useCollageViewer } from "@/components/collage-viewer/hooks/useCollageViewer";
import { DraggableImage } from "@/components/draggable-image/presentations/DraggableImage";
import { DndContext } from "@dnd-kit/core";
import clsx from "clsx";

export const CollageViewer = () => {
  const { items, onDragEnd } = useCollageViewer();
  const { Layout } = useCollageLayoutsSelector();

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
        <Layout
          items={items}
          onRender={(item) => <DraggableImage key={item.id} item={item} />}
          className="h-full gap-1"
        />
      </DndContext>
    </div>
  );
};
