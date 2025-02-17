"use client";

import { CollageLayouts } from "@/components/collage-layouts/presentations/CollageLayouts";
import { CollageViewer } from "@/components/collage-viewer/presentations/CollageViewer";
import { onAddFiles } from "@/components/collage-viewer/states/useFiles";
import { FileSelector } from "@/components/file-selector/presentations/FileSelector";

export const Editor = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col items-center justify-center gap-16">
      <div>
        <CollageViewer />
        <FileSelector onFileChange={onAddFiles} />
      </div>
      <CollageLayouts />
    </div>
  );
};
