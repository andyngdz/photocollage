"use client";

import { useDraggableImage } from "@/components/draggable-area/hooks/useDraggableImage";
import { PropsWithChildren } from "react";

export interface IDraggableImageProps extends PropsWithChildren {
  id: string;
}

export const DraggableArea = ({ id, children }: IDraggableImageProps) => {
  const { setNodeRef, style, listeners, attributes } = useDraggableImage(id);

  return (
    <div
      className="h-[inherit]"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
};
