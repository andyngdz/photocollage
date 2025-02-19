import { LayoutPlaceholder } from "@/components/collage-layouts-selector/presentations/LayoutPlaceholder";

const onGenerateLayouts = (count: number) => {
  const placeholders = Array.from({ length: count }).map((_, index) => {
    return <LayoutPlaceholder key={index} />;
  });

  return placeholders;
};

export { onGenerateLayouts };
