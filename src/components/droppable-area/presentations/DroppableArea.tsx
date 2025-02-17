import { IItemProps } from "@/components/collage-viewer/states/useFiles";
import { useDroppable } from "@dnd-kit/core";
import { FC, PropsWithChildren } from "react";

export interface IDroppableAreaProps extends PropsWithChildren {
  item: IItemProps;
}

export const DroppableArea: FC<IDroppableAreaProps> = ({ item, children }) => {
  const { id } = item;

  const { setNodeRef } = useDroppable({
    id,
    data: {
      item,
    },
  });

  return (
    <div ref={setNodeRef} className="h-[inherit]">
      {children}
    </div>
  );
};
