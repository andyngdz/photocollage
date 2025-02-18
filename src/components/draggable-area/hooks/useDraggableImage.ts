import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export const useDraggableImage = (id: string) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });

  const style = {
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 2 : 1,
  };

  return { style, attributes, listeners, setNodeRef };
};
