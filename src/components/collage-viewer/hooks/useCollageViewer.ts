import {
  onSwapItem,
  useFiles,
} from "@/components/collage-viewer/states/useFiles";
import { DragEndEvent } from "@dnd-kit/core";

export const useCollageViewer = () => {
  const { items } = useFiles();

  const onDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;

    if (over) {
      onSwapItem(active.id, over.id);
    }
  };

  return { items, onDragEnd };
};
