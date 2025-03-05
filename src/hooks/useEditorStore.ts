import { Editor } from "tldraw";
import { create } from "zustand";
import { editorToB64Image } from "@/lib/utils";

interface EditorStore {
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
}

const useEditorStore = create<EditorStore>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
}));

export const useDrawingEditor = () => {
  const { editor, setEditor } = useEditorStore();

  const getImage = async () => {
    if (!editor) return null;
    return await editorToB64Image(editor);
  };

  return {
    editor,
    setEditor,
    getImage,
  };
};
