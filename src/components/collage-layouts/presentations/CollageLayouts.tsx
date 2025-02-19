import { CollageLayoutsSelector } from "@/components/collage-layouts-selector/presentations/CollageLayoutsSelector";

export const CollageLayouts = () => {
  return (
    <div className="h-full w-[300px] p-4">
      <label className="prose-lg font-semibold">Layouts</label>
      <CollageLayoutsSelector />
    </div>
  );
};
