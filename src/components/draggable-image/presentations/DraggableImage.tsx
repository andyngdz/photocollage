import { Image } from "@heroui/react";
import { FC } from "react";

export interface IDraggableImageProps {
  file: File;
}

export const DraggableImage: FC<IDraggableImageProps> = ({ file }) => {
  const src = URL.createObjectURL(file);

  return (
    <div key={file.name} className="h-full w-full cursor-grab">
      <Image className="object-cover" radius="none" src={src} removeWrapper />
    </div>
  );
};
