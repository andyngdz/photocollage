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
    <div className="relative w-full h-full">
      <SimpleBarReact>
        <Image className="object-cover" radius="none" src={src} removeWrapper />
      </SimpleBarReact>
    </div>
  );
};
