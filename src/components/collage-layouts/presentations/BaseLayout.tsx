import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, useMemo } from "react";

export type BaseLayoutExtraProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement>;

export interface IBaseLayoutProps extends BaseLayoutExtraProps {
  size: number;
  onRender: (index: number) => React.ReactNode;
}

export const BaseLayout = <T,>({
  className,
  onRender,
  size,
  ...restProps
}: IBaseLayoutProps) => {
  const children = useMemo(
    () => Array.from({ length: size }).map((_, index) => onRender(index)),
    [size]
  );

  return (
    <div
      className={clsx("h-[inherit] w-[inherit]", "gap-1", className)}
      {...restProps}
    >
      {children}
    </div>
  );
};
