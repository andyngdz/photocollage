import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";

export interface IItemProps {
  id: string;
  file: File;
}

export interface IUseFilesProps {
  items: IItemProps[];
}

const useFiles = create<IUseFilesProps>(() => ({
  items: [],
}));

const onAddFiles = (files: File[]) => {
  const items = files.map((file) => {
    return {
      id: uuidv4(),
      file,
    };
  });

  useFiles.setState({ items });
};

export { onAddFiles, useFiles };
