import { Canvas } from "fabric";
import { create } from "zustand";

type CanvasEditorStore = {
  canvasEditor: Canvas | null;
  setCanvasEditor: (canvas: Canvas | null) => void;
};

export const useCanvasEditorStore = create<CanvasEditorStore>((set) => ({
  canvasEditor: null,
  setCanvasEditor: (canvasEditor: Canvas | null) => set({ canvasEditor }),
}));
