import {
  IBaseLayoutProps,
  TwoImagesHorizontal,
} from "@/components/collage-layouts/presentations";
import { FC } from "react";
import { create } from "zustand";

export interface IUseCollageLayoutsSelectorProps {
  Layout: FC<IBaseLayoutProps>;
  size: number;
}

const useCollageLayoutsSelector = create<IUseCollageLayoutsSelectorProps>(
  () => ({
    Layout: TwoImagesHorizontal,
    size: 2,
  })
);

const onSetNewLayout = (Layout: FC<IBaseLayoutProps>) => {
  useCollageLayoutsSelector.setState({ Layout });
};

export { onSetNewLayout, useCollageLayoutsSelector };
