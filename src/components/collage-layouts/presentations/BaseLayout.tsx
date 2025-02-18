import { IItemProps } from "@/components/collage-viewer/states/useFiles";
import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, useMemo } from "react";

export type BaseLayoutExtraProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement>;

export interface IBaseLayoutProps<T = IItemProps> extends BaseLayoutExtraProps {
  items: T[];
  onRender: (item: T) => React.ReactNode;
}

export const BaseLayout = <T,>({
  className,
  onRender,
  items,
  ...restProps
}: IBaseLayoutProps<T>) => {
  const children = useMemo(() => items.map(onRender), [items]);

  return (
    <div className={clsx("overflow-hidden", className)} {...restProps}>
      {children}
    </div>
  );
};
