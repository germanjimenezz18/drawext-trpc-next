"use client";
import { useDocumentSync } from "@/hooks/useDocumentSync";
import { useDrawingEditor } from "@/hooks/useDrawingEditor";
import { debounce, Editor, Tldraw } from "tldraw";
import ModifyShapeButton from "./modify-shape-button";
import "tldraw/tldraw.css";
import { useRef } from "react";

export default function TldrawCanvas() {
  const { setEditor } = useDrawingEditor();
  const { handleDocumentChange, handleLoadDocument } = useDocumentSync();
  const editorRef = useRef<Editor | null>(null);

  const debouncedHandleDocumentChange = debounce((editor: Editor) => {
    handleDocumentChange(editor);
  }, 800);

  const handleTldrawMount = (editor: Editor) => {
    // Set Global editor instance for use in other components
    setEditor(editor);
    editorRef.current = editor;

    // Cargar documento existente al montar
    handleLoadDocument(editor);

    // Listeners
    editor.sideEffects.registerAfterChangeHandler("shape", () => {
      debouncedHandleDocumentChange(editor);
    });

    editor.sideEffects.registerAfterDeleteHandler("shape", () => {
      debouncedHandleDocumentChange(editor);
    });
  };

  return (
    <div className="relative w-full h-full">
      <Tldraw
        autoFocus={true}
        className="rounded-2xl"
        components={{ SharePanel: ModifyShapeButton }}
        onMount={(editor) => handleTldrawMount(editor)}
      />
    </div>
  );
}
