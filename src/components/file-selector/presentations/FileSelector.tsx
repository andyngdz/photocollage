import { Button } from "@heroui/react";
import { ChangeEventHandler, useRef } from "react";

export const FileSelector = () => {
  const selectorRef = useRef<HTMLInputElement>(null);

  const onPickImages = () => {
    const selector = selectorRef.current;

    if (selector) {
      selector.click();
    }
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.info(event.target.files);
  };

  return (
    <div>
      <Button onPress={onPickImages}>Add images</Button>
      <input
        ref={selectorRef}
        type="file"
        onChange={onChange}
        hidden
        multiple
      />
    </div>
  );
};
