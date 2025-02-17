"use client";

import { IItemProps } from "@/components/collage-viewer/states/useFiles";
import { Image } from "@heroui/react";
import { FC } from "react";
import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export interface IDraggableImageProps {
  item: IItemProps;
}

export const DraggableImage: FC<IDraggableImageProps> = ({ item }) => {
  const src = URL.createObjectURL(item.file);

  return (
    <SimpleBarReact className="relative h-[inherit]">
      <Image radius="none" src={src} removeWrapper />
    </SimpleBarReact>
  );
};
