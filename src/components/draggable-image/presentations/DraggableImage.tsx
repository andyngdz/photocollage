"use client";

import { IItemProps } from "@/components/collage-viewer/states/useFiles";
import { Image } from "@heroui/react";
import { FC } from "react";
import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { useDraggableImage } from "@/components/draggable-image/hooks/useDraggableImage";
import { DroppableArea } from "@/components/droppable-area/presentations/DroppableArea";

export interface IDraggableImageProps {
  item: IItemProps;
}

export const DraggableImage: FC<IDraggableImageProps> = ({ item }) => {
  const { src, setNodeRef, style, listeners, attributes } =
    useDraggableImage(item);

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
