'use client'
import { Tldraw } from 'tldraw'
import { ModeToggle } from '../components/mode-toggle';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-start items-center border-b drop-shadow-sm'>
        <h1 className='text-2xl font-bold p-4'>Drawext</h1>
        <nav className='w-full flex justify-between items-center gap-x-2 px-2'>
          <ModeToggle />
        </nav>
      </header>
      <main className='grid flex-1 grid-cols-[minmax(200px,300px)_1fr] gap-4 p-4 bg-secondary overflow-hidden'>
        <Card className='h-full p-2 rounded-lg'>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card className='h-full p-2 rounded-lg'>
          <Tldraw persistenceKey="asdf" autoFocus={true} />
        </Card>
      </main>
    </div>
  )
}
