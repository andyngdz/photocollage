import { useCollageViewer } from "@/components/collage-viewer/hooks/useCollageViewer";
import { DraggableArea } from "@/components/draggable-area/presentations/DraggableArea";
import { DroppableArea } from "@/components/droppable-area/presentations/DroppableArea";
import { ImageRender } from "@/components/image-render/presentations/ImageRender";
import { ItemScroller } from "@/components/item-scroller/presentations/ItemScroller";
import { DndContext } from "@dnd-kit/core";
import clsx from "clsx";

export const CollageViewer = () => {
  const { id, Layout, items, size, onDragEnd } = useCollageViewer();

  return (
    <div
      className={clsx("bg-white")}
      style={{
        width: 600,
        height: 600,
      }}
    >
      <DndContext onDragEnd={onDragEnd}>
        <Layout
          key={id}
          size={size}
          onRender={(index) => {
            const item = items[index];

            if (item) {
              const { id } = item;

              return (
                <DraggableArea key={id} id={id}>
                  <DroppableArea item={item}>
                    <ImageRender file={item.file} />
                  </DroppableArea>
                </DraggableArea>
              );
            }

            return <ItemScroller key={`${index}`} />;
          }}
        />
      </DndContext>
    </div>
  );
};
