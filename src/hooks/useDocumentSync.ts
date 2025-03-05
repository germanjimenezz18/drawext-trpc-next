import { Editor, getSnapshot, loadSnapshot } from "tldraw";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { useCallback } from "react";

export const useDocumentSync = () => {
  const { mutateAsync: saveDocument } = trpc.saveDocument.useMutation();
  const { data, isLoading, refetch, isError } = trpc.getDocument.useQuery(
    undefined,
    {
      enabled: false,
      staleTime: 1000 * 60, // 5 minutos
      onError: (error) => {
        console.error("Error fetching document:", error);
        toast.error("Error retrieving document");
      },
    }
  );

  const handleDocumentChange = (editor: Editor) => {
    try {
      const { document } = getSnapshot(editor.store);

      toast.promise(saveDocument({ document }), {
        loading: "Saving document...",
        success: "Saved successfully",
        error: "Save failed",
      });
    } catch (error) {
      console.error("Error saving document:", error);
      toast.error("Error saving");
    }
  };

  const handleLoadDocument = useCallback(
    async (editor: Editor) => {

      const result = await refetch();
      if (result.data && result.data.document.content) {
        try {
          const documentData = JSON.parse(result.data.document.content);
          loadSnapshot(editor.store, documentData);
        } catch (parseError) {
          console.error("Error parsing document:", parseError);
          toast.error("Error processing document");
        }
      } else {
        toast.info("No saved document");
      }
    },
    [refetch]
  );

  return {
    handleDocumentChange,
    handleLoadDocument,
    isLoading,
    isError,
    hasData: !!data,
  };
};
