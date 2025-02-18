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
        className="gap-1 p-2 bg-default rounded-lg"
      />
    );
  });

  return (
    <div className="h-full w-[300px] p-4">
      <label className="prose-lg font-semibold">Layouts</label>
      <SimpleBarReact className="mt-10">
        <div className="grid grid-cols-3 h-12">{layout2Children}</div>
      </SimpleBarReact>
    </div>
  );
};
