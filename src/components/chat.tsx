"use client";

import { useOpenAIKey } from "@/hooks/useOpenAIKey";
import { useDrawingEditor } from "@/hooks/useEditorStore";

import { Button } from "@/components/ui/button";
import { GlassesIcon, Settings } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { ChatLoadKeySkeleton, ChatPrompSkeleton } from "./skeletons";
import { toast } from "sonner";
import Link from "next/link";

export function Chat() {
  const { apiKey, isLoading: keyIsLoading } = useOpenAIKey();
  const { getImage } = useDrawingEditor();

  const mutation = trpc.completion.useMutation({
    onSuccess: () => {
      toast.success("Prompt analyzed");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleAnalyze = async () => {
    try {
      const image = await getImage();

      if (!image) {
        toast.error("No image available to analyze");
        return;
      }

      mutation.mutate({ apiKey: apiKey!, image: image });
    } catch (error) {
      console.error("Error getting image:", error);
      toast.error("Failed to get image");
    }
  };

  if (keyIsLoading) {
    return <ChatLoadKeySkeleton />;
  }

  if (mutation.isLoading) {
    return <ChatPrompSkeleton />;
  }

  return (
    <div className="flex flex-col h-full select-none">
      <div className="border p-2 h-full rounded-md">
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4">
            {!apiKey ? (
              <div className="h-full flex flex-col gap-2 items-center justify-center">
                <span>No OpenAI API key set</span>
                <Link href={"/settings"}>
                  <Button variant="outline">
                    <Settings /> Go to settings
                  </Button>
                </Link>
              </div>
            ) : mutation.data ? (
              <div className="flex flex-col gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Analysis Result:</h3>
                  <p className="text-foreground">{mutation.data.text}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Tokens used: {mutation.data.usage.totalTokens}
                  </p>
                </div>
              </div>
            ) : mutation.error ? (
              <div className="bg-destructive/10 p-4 rounded-lg">
                <h3 className="font-semibold text-destructive mb-2">Error:</h3>
                <p className="text-destructive">{mutation.error.message}</p>
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                <p>
                  Draw something and click &quot;Analyze my draw&quot; to get
                  started!
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-row gap-2 border-t pt-2">
            <Button
              variant="indigo"
              onClick={handleAnalyze}
              disabled={!apiKey || mutation.isLoading}
            >
              <GlassesIcon />
              {mutation.isLoading ? "Analyzing..." : "Analyze my draw"}
            </Button>

            <Link href={"/settings"}>
              <Button variant="outline" disabled={!apiKey}>
                <Settings />
                <span className="sr-only">Settings</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
