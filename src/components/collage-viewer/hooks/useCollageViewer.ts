import { useCollageLayoutsSelector } from "@/components/collage-layouts-selector/hooks/useCollageLayoutsSelector";
import {
  onSwapItem,
  useFiles,
} from "@/components/collage-viewer/states/useFiles";
import { DragEndEvent } from "@dnd-kit/core";
import { useMemo } from "react";

export const useCollageViewer = () => {
  const { items } = useFiles();
  const { Layout, size } = useCollageLayoutsSelector();

  const onDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;

    if (over) {
      onSwapItem(active.id, over.id);
    }
  };

  const id = useMemo(() => {
    return items.map((item) => item.id).join("-");
  }, [items]);

  return { id, Layout, size, items, onDragEnd };
};
