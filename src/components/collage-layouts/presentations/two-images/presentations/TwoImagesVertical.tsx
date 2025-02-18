import {
  BaseLayout,
  IBaseLayoutProps,
} from "@/components/collage-layouts/presentations/BaseLayout";
import clsx from "clsx";

export const TwoImagesVertical = ({
  className,
  ...restProps
}: IBaseLayoutProps) => {
  return (
    <BaseLayout
      className={clsx("grid grid-rows-2", className)}
      {...restProps}
    />
  );
};
