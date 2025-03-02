"use client";
import { Suspense } from "react";
import { Tldraw } from "tldraw";
import { ApiKeyForm } from "@/components/api-key-form";
import { useOpenAIKey } from "@/hooks/useOpenAIKey";
import { LoadingApiKey } from "@/components/loading-api-key";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { GlassesIcon, Settings } from "lucide-react";

export default function Home() {
  const { apiKey, isLoading, saveApiKey, removeApiKey } = useOpenAIKey();

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-indigo-200 to-yellow-100">
      <header className="flex justify-center  items-center w-full border  pt-2">
        <div className=" mx-auto p-3 rounded-3xl bg-white/30 border-[white]/20 ">
          <h1 className="text-pretty bg-[#f9fafb] rounded-xl px-2 py-2 font-medium ">
            Drawext
          </h1>
        </div>
        <nav className="w-full flex justify-between items-center gap-x-2 px-2">
          <div className="flex items-center gap-2"></div>
        </nav>
      </header>
      <main className="grid flex-1 grid-cols-[minmax(300px,400px)_1fr] gap-6 p-4 1 overflow-hidden ">
        <Card className="h-full p-3 rounded-3xl bg-white/30 border-[white]/20 ">
          <div className="bg-[#f9fafb] h-full rounded-xl border shadow-lg flex flex-col">
            <CardHeader>
              <CardTitle>IA analysis</CardTitle>
              <CardDescription>
                Get AI analysis of your drawings, enhance your creativity and
                get insights.
              </CardDescription>
              <Separator className="my-4" />
            </CardHeader>

            <CardContent className="flex-1">
              <Suspense fallback={<LoadingApiKey />}>
                {isLoading ? (
                  <LoadingApiKey />
                ) : !apiKey ? (
                  <ApiKeyForm onSave={saveApiKey} />
                ) : (
                  <div className="flex flex-col h-full space-y-4">
                    {/* ia chat */}

                    <div className=" border p-2 h-full rounded-md bg-secondary">
                      <div className="flex flex-col h-full">
                        <div className="flex-1 overflow-y-auto">
                          <div className="flex flex-col gap-2">hello</div>
                        </div>
                        <div className="flex flex-row gap-2">
                          <Button variant={"default"} size="sm">
                            <GlassesIcon /> Analize my draw
                          </Button>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="default" size="sm">
                                <Settings />
                                <span className="sr-only">Settings</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              side="top"
                              align="end"
                              className="z-[1000]"
                            >
                              <DropdownMenuItem onClick={removeApiKey}>
                                <Button  size="sm">
                                  Remove API Key
                                </Button>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Suspense>
            </CardContent>
          </div>
        </Card>

        <Card className="h-full p-3 rounded-3xl bg-white/30 border-[white]/20 border">
          <Tldraw
            persistenceKey="asdf"
            autoFocus={true}
            className="shadow-lg rounded-xl border"
          />
        </Card>
      </main>
    </div>
  );
}
