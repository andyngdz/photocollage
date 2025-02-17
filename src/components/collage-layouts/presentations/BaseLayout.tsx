import clsx, { ClassValue } from "clsx";
import { PropsWithChildren, useMemo } from "react";

export interface IBaseLayoutProps<T> extends PropsWithChildren {
  className?: ClassValue;
  items: T[];
  onRender: (item: T) => React.ReactNode;
}

export const BaseLayout = <T,>({
  className,
  onRender,
  items,
}: IBaseLayoutProps<T>) => {
  const children = useMemo(() => items.map(onRender), [items]);

  return <div className={clsx("overflow-hidden", className)}>{children}</div>;
};
