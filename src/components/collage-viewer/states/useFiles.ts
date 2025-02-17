import { UniqueIdentifier } from "@dnd-kit/core";
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

const onSwapItem = (activeId: UniqueIdentifier, overId: UniqueIdentifier) => {
  useFiles.setState((state) => {
    const currentItems = state.items;

    const activeIndex = currentItems.findIndex((item) => item.id === activeId);
    const overIndex = currentItems.findIndex((item) => item.id === overId);

    const items = [...currentItems];

    [items[activeIndex], items[overIndex]] = [
      items[overIndex],
      items[activeIndex],
    ];

    return { items };
  });
};

export { onAddFiles, onSwapItem, useFiles };
