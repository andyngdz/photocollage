import { onSetNewLayout } from "@/components/collage-layouts-selector/hooks/useCollageLayoutsSelector";
import { onGenerateLayouts } from "@/components/collage-layouts-selector/utils/layout";
import {
  TwoImagesHorizontal,
  TwoImagesVertical,
} from "@/components/collage-layouts/presentations";
import SimpleBarReact from "simplebar-react";

const LAYOUTS_2 = [TwoImagesHorizontal, TwoImagesVertical];

export const CollageLayoutsSelector = () => {
  const layout2Children = LAYOUTS_2.map((Layout) => {
    const items = onGenerateLayouts(2);

    return (
      <Layout
        key={Layout.name}
        size={2}
        onRender={(index) => items[index]}
        className="p-2 bg-default rounded]-lg hover-border-blue"
        onClick={() => onSetNewLayout(Layout)}
      />
    );
  });

  return (
    <SimpleBarReact className="mt-10">
      <div className="grid grid-cols-4 gap-4 h-12">{layout2Children}</div>
    </SimpleBarReact>
  );
};
