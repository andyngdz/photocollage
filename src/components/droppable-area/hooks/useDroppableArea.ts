import { IItemProps } from "@/components/collage-viewer/states/useFiles";
import { useDroppable } from "@dnd-kit/core";

export const useDroppableArea = (item: IItemProps) => {
  const { id } = item;

  const { setNodeRef } = useDroppable({
    id,
    data: {
      item,
    },
  });

  return { setNodeRef };
};
