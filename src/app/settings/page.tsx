// src/app/settings/page.tsx
"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ApiKeyForm } from "@/components/api-key-form";
import { useOpenAIKey } from "@/hooks/useOpenAIKey";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash2 } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  const { apiKey , saveApiKey, removeApiKey } = useOpenAIKey();

  const handleSave = (key: string) => {
    saveApiKey(key);
    toast.success("API key saved successfully");
  };

  const handleRemove = () => {
    removeApiKey();
    toast.success("API key removed");
  };

  return (
    <main className="grid flex-1 grid-cols-1 md:grid-cols-[minmax(300px,400px)_1fr] xl:grid-cols-[minmax(400px,500px)_1fr] gap-8 p-4 md:p-8 overflow-hidden ">

      <Card className="h-full p-2 rounded-3xl bg-white/30 border-[white]/20 border ">
        <div className="bg-[#f9fafb] h-full rounded-2xl  flex flex-col">
          <CardHeader>
            <div className="mb-4">
              <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Editor
              </Link>
            </div>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Manage your application preferences and API keys
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">OpenAI API Key</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Set your OpenAI API key to enable the application to use the OpenAI API
                </p>

                {apiKey ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={handleRemove}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove Key
                      </Button>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        API Key is set
                      </div>
                    </div>
                  </div>
                ) : (
                  <ApiKeyForm onSave={handleSave} />
                )}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </main>
  );
}
