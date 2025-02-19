"use client";

import { CollageLayouts } from "@/components/collage-layouts/presentations/CollageLayouts";
import { CollageViewer } from "@/components/collage-viewer/presentations/CollageViewer";
import { onAddFiles } from "@/components/collage-viewer/states/useFiles";
import { FileSelector } from "@/components/file-selector/presentations/FileSelector";
import { Allotment } from "allotment";

export const Editor = () => {
  return (
    <div className="h-[100vh] w-full">
      <Allotment>
        <Allotment.Pane preferredSize={"70%"}>
          <div className="h-full w-full flex flex-col items-center justify-center gap-16">
            <CollageViewer />
            <FileSelector onFileChange={onAddFiles} />
          </div>
        </Allotment.Pane>
        <Allotment.Pane preferredSize={"20%"}>
          <CollageLayouts />
        </Allotment.Pane>
      </Allotment>
    </div>
  );
};
