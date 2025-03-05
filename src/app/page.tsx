import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chat } from "@/components/chat";
import TldrawCanvas from "@/components/tldraw-canvas";

export default function Home() {
  return (
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
              Get AI analysis of your drawings, enhance your creativity and get
              insights.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <Chat />
          </CardContent>
        </div>
      </Card>

      <Card className="h-full p-2 rounded-3xl bg-white/30 border-[white]/20 border ">
        <TldrawCanvas />
      </Card>
    </main>
  );
}
