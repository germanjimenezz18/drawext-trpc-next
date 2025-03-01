'use client'
// import { trpc } from "@/lib/trpc";
import { Tldraw } from 'tldraw'


export default function Home() {
  return (
    <main>
      <div style={{ position: 'fixed', inset: 0 }}>
        <Tldraw persistenceKey="asdf" />
      </div>
    </main>
  )
}
