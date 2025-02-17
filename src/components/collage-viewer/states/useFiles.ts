import { create } from "zustand";

export interface IUseFilesProps {
  files: File[];
}

const useFiles = create<IUseFilesProps>(() => ({
  files: [],
}));

const onAddFiles = (files: File[]) => {
  useFiles.setState({ files });
};

export { onAddFiles, useFiles };
