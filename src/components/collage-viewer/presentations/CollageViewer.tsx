import { useFiles } from "@/components/collage-viewer/states/useFiles";
import { Image } from "@heroui/react";
import clsx from "clsx";
import { useMemo } from "react";

export const CollageViewer = () => {
  const { files } = useFiles();

  const children = useMemo(() => {
    return files.map((file) => {
      const src = URL.createObjectURL(file);
      return (
        <div key={file.name} className="h-full w-full overflow-scroll">
          <Image
            className="object-cover"
            radius="none"
            src={src}
            removeWrapper
          />
        </div>
      );
    });
  }, [files]);

  return (
    <div
      className={clsx("p-2", "bg-default-50", "rounded-lg", "overflow-hidden")}
      style={{
        maxWidth: 800,
        maxHeight: 600,
      }}
    >
      <div
        className={clsx(
          "grid overflow-hidden",
          "grid-cols-2",
          "gap-1",
          "w-full",
          "h-full"
        )}
      >
        {children}
      </div>
    </div>
  );
};
