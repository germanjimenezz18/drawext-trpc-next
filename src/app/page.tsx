"use client";
import { debounce, Editor, Tldraw } from "tldraw";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chat } from "@/components/chat";

import "tldraw/tldraw.css";
import { TLUiComponents } from "tldraw";
import { useDrawingEditor } from "@/hooks/useDrawingEditor";
import { Navbar } from "@/components/navbar";
import { useDocumentSync } from "@/hooks/useDocumentSync";
import { toast } from "sonner";
import ModifyShapeButton from "@/components/modify-shape-button";

const components: TLUiComponents = {
  SharePanel: ModifyShapeButton,
};

export default function Home() {
  const { setEditor } = useDrawingEditor();
  const { handleDocumentChange } = useDocumentSync();

  const debouncedHandleDocumentChange = debounce((editor: Editor) => {
    handleDocumentChange(editor);
  }, 800);

  const handleTldrawMount = (editor: Editor) => {
    // Set Global editor instance for use in other components
    setEditor(editor);
    toast.success("Editor mounted");
    // Also register change handler
    editor.sideEffects.registerAfterChangeHandler("shape", () => {
      debouncedHandleDocumentChange(editor);
    });

    editor.sideEffects.registerAfterDeleteHandler("shape", () => {
      debouncedHandleDocumentChange(editor);
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-indigo-200  to-indigo-400">
      <header className="flex w-full items-center py-2.5 px-10 bg-[#f9fafb] bg-white/30 border-[white]/20">
        <Navbar />
      </header>
      <main className="grid flex-1 grid-cols-1 md:grid-cols-[minmax(300px,400px)_1fr] xl:grid-cols-[minmax(400px,500px)_1fr] gap-8 p-4 md:p-8 overflow-hidden ">
        <Card className="h-full p-2 rounded-3xl bg-white/30 border-[white]/20 ">
          <div className="bg-[#f9fafb] h-full rounded-2xl  flex flex-col">
            <CardHeader className="select-none">
              <CardTitle>
                <span className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-2 py-1 rounded-md">
                  AI
                </span>{" "}
                Analyzer
              </CardTitle>
              <CardDescription>
                Get AI analysis of your drawings, enhance your creativity and
                get insights.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <Chat />
            </CardContent>
          </div>
        </Card>

        <Card className="h-full p-2 rounded-3xl bg-white/30 border-[white]/20 border ">
          <Tldraw
            // persistenceKey="test"
            autoFocus={true}
            className=" rounded-2xl"
            components={components}
            onMount={(editor) => handleTldrawMount(editor)}
          />
        </Card>
      </main>
    </div>
  );
}
