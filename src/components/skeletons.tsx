import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "./ui/button";
import { Key, Loader, Settings } from "lucide-react";

export function ChatLoadKeySkeleton() {
    return (
        <Skeleton className="flex flex-col h-full space-y-4 select-none">
            <div className="border p-2 h-full rounded-md bg-secondary">
                <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-y-auto">
                        <div className="flex flex-col gap-2 h-full items-center justify-center">
                            <Key className="animate-bounce text-indigo-800 " size={14} />
                            <span className="text-sm from-indigo-500 to-indigo-800 bg-gradient-to-br bg-clip-text text-transparent">
                                Retrieving your API key
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 border-t pt-2">
                        <Button variant={"indigo"}>
                            <Loader className="animate-spin" /> Analyze my draw
                        </Button>
                        <Button variant="outline">
                            <Settings />
                        </Button>
                    </div>
                </div>
            </div>
        </Skeleton>
    );
}


export function ChatPrompSkeleton() {
    return (

        <Skeleton className="flex flex-col h-full space-y-4 select-none">
            <div className="border p-2 h-full rounded-md bg-secondary">
                <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-y-auto">
                        <div className="flex flex-col gap-2 h-full items-center justify-center">
                            <Loader className="animate-spin text-indigo-800 " size={14} />
                            <span className="text-sm from-indigo-500 to-indigo-800 bg-gradient-to-br bg-clip-text text-transparent">
                                Analyzing your draw
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 border-t pt-2">
                        <Button variant={"outline"}>
                            <Loader className="animate-spin" /> Analize my draw
                        </Button>
                        <Button variant="indigo">
                            <Settings />
                        </Button>
                    </div>
                </div>
            </div>
        </Skeleton>
    );
}
