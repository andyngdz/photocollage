import {
  IBaseLayoutProps,
  TwoImagesVertical,
} from "@/components/collage-layouts/presentations";
import { FC } from "react";
import { create } from "zustand";

export interface IUseCollageLayoutsSelectorProps {
  Layout: FC<IBaseLayoutProps>;
}

const useCollageLayoutsSelector = create<IUseCollageLayoutsSelectorProps>(
  () => ({
    Layout: TwoImagesVertical,
  })
);

const onSetNewLayout = (Layout: FC<IBaseLayoutProps>) => {
  useCollageLayoutsSelector.setState({ Layout });
};

export { onSetNewLayout, useCollageLayoutsSelector };
