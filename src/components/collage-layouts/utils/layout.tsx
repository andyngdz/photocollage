import { LayoutPlaceholder } from "@/components/collage-layouts/presentations/LayoutPlaceholder";

const onGenerateLayouts = (count: number) => {
  const placeholders = [];

  for (let i = 0; i < count; i++) {
    placeholders.push(<LayoutPlaceholder key={i} />);
  }

  return placeholders;
};

export { onGenerateLayouts };
