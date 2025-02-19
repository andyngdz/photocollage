import { Image } from "@heroui/react";
import { FC } from "react";

export interface IImageRenderProps {
  file: File;
}

export const ImageRender: FC<IImageRenderProps> = ({ file }) => {
  const src = URL.createObjectURL(file);

  return <Image radius="none" src={src} removeWrapper />;
};
