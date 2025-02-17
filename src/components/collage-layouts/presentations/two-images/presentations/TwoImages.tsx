import {
  BaseLayout,
  IBaseLayoutProps,
} from "@/components/collage-layouts/presentations/BaseLayout";

export const TwoImages = <T,>(props: IBaseLayoutProps<T>) => {
  return <BaseLayout {...props} />;
};
