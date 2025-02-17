import { ValueChanged } from "@/types";
import { ChangeEventHandler, useRef } from "react";

export const useFileSelector = (onFileChange: ValueChanged<File[]>) => {
  const selectorRef = useRef<HTMLInputElement>(null);

  const onPickImages = () => {
    const selector = selectorRef.current;

    if (selector) {
      selector.click();
    }
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files) {
      onFileChange(Array.from(event.target.files));
    }
  };

  return { selectorRef, onPickImages, onChange };
};
