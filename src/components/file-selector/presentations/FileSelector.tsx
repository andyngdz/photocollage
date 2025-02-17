import { ValueChanged } from "@/types";
import { Button } from "@heroui/react";
import { ChangeEventHandler, FC, useRef } from "react";

export interface IFileSelectorProps {
  onFileChange: ValueChanged<File[]>;
}

export const FileSelector: FC<IFileSelectorProps> = ({ onFileChange }) => {
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

  return (
    <div>
      <Button onPress={onPickImages}>Add images</Button>
      <input
        ref={selectorRef}
        type="file"
        onChange={(event) => onChange(event)}
        hidden
        multiple
      />
    </div>
  );
};
