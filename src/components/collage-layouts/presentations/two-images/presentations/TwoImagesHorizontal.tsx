import {
  BaseLayout,
  IBaseLayoutProps,
} from "@/components/collage-layouts/presentations/BaseLayout";
import clsx from "clsx";

export const TwoImagesHorizontal = ({
  className,
  ...restProps
}: IBaseLayoutProps) => {
  return (
    <BaseLayout
      className={clsx("grid grid-cols-2", className)}
      {...restProps}
    />
  );
};
