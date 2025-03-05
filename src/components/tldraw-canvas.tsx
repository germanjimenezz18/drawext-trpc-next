"use client";
import { useDocumentSync } from "@/hooks/useDocumentSync";
import { useDrawingEditor } from "@/hooks/useEditorStore";
import { debounce, Editor, Tldraw } from "tldraw";
import ModifyShapeButton from "./modify-shape-button";
import "tldraw/tldraw.css";
import { useRef } from "react";
import { Skeleton } from "./ui/skeleton";
import { Loader } from "lucide-react";

export default function TldrawCanvas() {
  const { setEditor } = useDrawingEditor();
  const { handleDocumentChange, handleLoadDocument, isLoading } =
    useDocumentSync();
  const editorRef = useRef<Editor | null>(null);

  const debouncedHandleDocumentChange = debounce((editor: Editor) => {
    handleDocumentChange(editor);
  }, 3000);

  const handleTldrawMount = async (editor: Editor) => {
    // Set Global editor instance for use in other components
    setEditor(editor);
    editorRef.current = editor;

    // Cargar documento existente al montar y esperar a que termine
    await handleLoadDocument(editor);

    // Registrar listeners después de cargar el documento
    editor.sideEffects.registerAfterChangeHandler("shape", () => {
      debouncedHandleDocumentChange(editor);
    });

    editor.sideEffects.registerAfterDeleteHandler("shape", () => {
      debouncedHandleDocumentChange(editor);
    });
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <Skeleton className="absolute inset-0 z-10 flex items-center justify-center  rounded-2xl">
          <Loader className="w-10 h-10 text-indigo-500 animate-spin" />
        </Skeleton>
      )}
      <Tldraw
        autoFocus={true}
        className="rounded-2xl"
        components={{ SharePanel: ModifyShapeButton }}
        onMount={(editor) => { void handleTldrawMount(editor); }}
      />
    </div>
  );
}
