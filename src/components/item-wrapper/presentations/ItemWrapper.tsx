import { FC, PropsWithChildren } from "react";
import SimpleBarReact from "simplebar-react";

export const ItemWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SimpleBarReact className="h-full w-full bg-default">
      {children}
    </SimpleBarReact>
  );
};
