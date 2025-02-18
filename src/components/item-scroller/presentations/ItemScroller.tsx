import { FC, PropsWithChildren } from "react";
import SimpleBarReact from "simplebar-react";

export const ItemScroller: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SimpleBarReact className="h-full w-full bg-default" role="scrollbar">
      {children}
    </SimpleBarReact>
  );
};
