import { useFileSelector } from "@/components/file-selector/hooks/useFileSelector";
import { ValueChanged } from "@/types";
import { Button } from "@heroui/react";
import { FC } from "react";

export interface IFileSelectorProps {
  onFileChange: ValueChanged<File[]>;
}

export const FileSelector: FC<IFileSelectorProps> = ({ onFileChange }) => {
  const { onChange, onPickImages, selectorRef } = useFileSelector(onFileChange);

  return (
    <div>
      <Button onPress={onPickImages}>Add images</Button>
      <input
        ref={selectorRef}
        type="file"
        data-testid="file-picker"
        onChange={(event) => onChange(event)}
        hidden
        multiple
      />
    </div>
  );
};
