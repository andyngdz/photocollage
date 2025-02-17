import { TwoImages } from "@/components/collage-layouts/presentations";
import { onGenerateLayouts } from "@/components/collage-layouts/utils/layout";

import SimpleBarReact from "simplebar-react";

const LAYOUTS_2 = [TwoImages];

export const CollageLayouts = () => {
  const layout2Children = LAYOUTS_2.map((Layout) => {
    return (
      <Layout
        key={Layout.name}
        items={onGenerateLayouts(2)}
        onRender={(item) => item}
        className="w-12 h-10 gap-1 p-1 rounded-sm bg-gray-200"
      />
    );
  });

  return (
    <div className="h-full w-[300px] p-4">
      <label className="prose-lg">Layouts</label>
      <SimpleBarReact>{layout2Children}</SimpleBarReact>
    </div>
  );
};
