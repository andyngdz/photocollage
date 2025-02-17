"use client";

import { IItemProps } from "@/components/collage-viewer/states/useFiles";
import { Image } from "@heroui/react";
import { FC } from "react";
import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { DroppableArea } from "@/components/droppable-area/presentations/DroppableArea";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export interface IDraggableImageProps {
  item: IItemProps;
}

export const DraggableImage: FC<IDraggableImageProps> = ({ item }) => {
  const { id, file } = item;

  const src = URL.createObjectURL(file);
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
    });
  const style = {
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 2 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      className="h-[inherit]"
      style={style}
      {...listeners}
      {...attributes}
    >
      <DroppableArea item={item}>
        <SimpleBarReact className="h-[inherit]">
          <Image radius="none" src={src} removeWrapper />
        </SimpleBarReact>
      </DroppableArea>
    </div>
  );
};
