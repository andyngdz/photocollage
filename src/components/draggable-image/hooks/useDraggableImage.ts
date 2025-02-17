import { IItemProps } from "@/components/collage-viewer/states/useFiles";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export const useDraggableImage = (item: IItemProps) => {
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

  return { src, style, attributes, listeners, setNodeRef };
};
