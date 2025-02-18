import {
  BaseLayout,
  IBaseLayoutProps,
} from "@/components/collage-layouts/presentations/BaseLayout";
import clsx from "clsx";

export const TwoImagesVertical = <T,>({
  className,
  ...restProps
}: IBaseLayoutProps<T>) => {
  return (
    <BaseLayout
      className={clsx("grid grid-rows-2", className)}
      {...restProps}
    />
  );
};
