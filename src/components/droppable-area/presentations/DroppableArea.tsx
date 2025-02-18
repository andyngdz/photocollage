import { IItemProps } from "@/components/collage-viewer/states/useFiles";
import { useDroppableArea } from "@/components/droppable-area/hooks/useDroppableArea";
import { FC, PropsWithChildren } from "react";

export interface IDroppableAreaProps extends PropsWithChildren {
  item: IItemProps;
}

export const DroppableArea: FC<IDroppableAreaProps> = ({ item, children }) => {
  const { setNodeRef } = useDroppableArea(item);

  return (
    <div ref={setNodeRef} className="h-full w-full">
      {children}
    </div>
  );
};
