"use client";

import { Image } from "@heroui/react";
import { FC } from "react";
import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export interface IDraggableImageProps {
  file: File;
}

export const DraggableImage: FC<IDraggableImageProps> = ({ file }) => {
  const src = URL.createObjectURL(file);

  return (
    <SimpleBarReact key={file.name} className="relative h-[inherit]">
      <Image radius="none" src={src} removeWrapper />
    </SimpleBarReact>
  );
};
