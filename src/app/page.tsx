"use client";
import { Tldraw, useEditor } from "tldraw";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chat } from "@/components/chat";

import { TLUiComponents } from 'tldraw'
import 'tldraw/tldraw.css'
import { Button } from "@/components/ui/button";
import { useDrawingEditor } from "@/hooks/useDrawingEditor";

export default function Home() {
  const { setEditor } = useDrawingEditor();

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-indigo-200  to-indigo-400">
      <header className="flex justify-between w-full items-center pt-2 px-4">
        <h1 className="flex items-center gap-x-1  rounded-2xl px-2 py-1 select-none tracking-wide ">
        </h1>
      </header>
      <main className="grid flex-1 grid-cols-[minmax(300px,400px)_1fr] xl:grid-cols-[minmax(400px,500px)_1fr] gap-8 p-8 overflow-hidden ">
        <Card className="h-full p-2 rounded-3xl bg-white/30 border-[white]/20 ">
          <div className="bg-[#f9fafb] h-full rounded-2xl  flex flex-col">
            <CardHeader className="select-none" >
              <CardTitle>IA analysis</CardTitle>
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
            persistenceKey="test"
            autoFocus={true}
            className=" rounded-2xl"
            components={components}
            onMount={(editor) => {
              setEditor(editor);
            }}
          />
        </Card>
      </main>
    </div>
  );
}


function ExportCanvasButton() {
  const editor = useEditor()
  return (
    <Button
      style={{ pointerEvents: 'all', fontSize: 18, backgroundColor: 'thistle' }}
      onClick={async () => {
        const shapeIds = editor.getCurrentPageShapeIds()
        if (shapeIds.size === 0) return alert('No shapes on the canvas')
        const { blob } = await editor.toImage(Array.from(shapeIds), { format: 'png', background: false })

        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = 'every-shape-on-the-canvas.jpg'
        link.click()
        URL.revokeObjectURL(link.href)
      }}
    >
      Export canvas as image
    </Button>
  )
}
const components: TLUiComponents = {
  SharePanel: ExportCanvasButton,
}