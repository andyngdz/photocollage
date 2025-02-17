import clsx, { ClassValue } from "clsx";
import { PropsWithChildren, useMemo } from "react";

export interface IBaseLayoutProps<T> extends PropsWithChildren {
  className?: ClassValue[];
  items: T[];
  onRender: (item: T) => React.ReactNode;
}

export const BaseLayout = <T,>({
  className,
  onRender,
  items,
}: IBaseLayoutProps<T>) => {
  const children = useMemo(() => items.map(onRender), [items]);

  return (
    <div
      className={clsx(
        "grid overflow-hidden",
        "grid-cols-2",
        "gap-1",
        "w-[inherit]",
        "h-[inherit]",
        className
      )}
    >
      {children}
    </div>
  );
};
