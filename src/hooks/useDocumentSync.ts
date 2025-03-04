import { Editor, getSnapshot, loadSnapshot } from "tldraw";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export const useDocumentSync = () => {
  const { mutateAsync: saveDocument } = trpc.saveDocument.useMutation();
  const { data, refetch } = trpc.getDocument.useQuery();

  const handleDocumentChange = (editor: Editor) => {
    try {
      const { document } = getSnapshot(editor.store);

      toast.promise(saveDocument({ document }), {
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
      await refetch();

      if (data && data.document && data.document.content) {
        const documentData = JSON.parse(data.document.content);
        loadSnapshot(editor.store, documentData);
        toast.success("Documento cargado");
      } else {
        toast.error("No se pudo cargar el documento");
      }
    } catch (error) {
      console.error("Error al cargar el documento:", error);
      toast.error("Error al cargar el documento");
    }
  };

  return { handleDocumentChange, handleLoadDocument };
};
