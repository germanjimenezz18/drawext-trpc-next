import { Editor } from "tldraw";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export const useDocumentSync = () => {
  const { mutateAsync: saveDocument } = trpc.saveDocument.useMutation();
  const { mutateAsync: loadDocument } = trpc.getDocument.useMutation();

  const handleDocumentChange = (editor: Editor) => {
    try {
      const document = editor.store.serialize();
      toast.promise(saveDocument({ document: JSON.stringify(document) }), {
        loading: "Saving...",
        success: "Saved",
        error: "Failed to save",
      });
    } catch {
      toast.error("Save failed");
    }
  };

  const handleLoadDocument = async (editor: Editor) => {
    try {
      toast.promise(loadDocument(), {
        loading: "Loading...",
        success: "Loaded",
        error: "Failed to load",
      });
    } catch {
      toast.error("Load failed");
    }
  };

  return { handleDocumentChange, handleLoadDocument };
};
