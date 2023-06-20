import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='container flex flex-col items-center justify-center'>
      <h2 className='text-4xl p-8'>Note Taker</h2>
      <div className='flex flex-row items-center justify-center'>
        <div className='flex flex-col w-96 pr-8 items-center justify-center'>
          <Label htmlFor='taskInput' className='pb-2'>Add A Task</Label>
          <Input id='taskInput' placeholder='Write something' />
        </div>
        <div className='flex flex-row pl-8 pt-6 items-center justify-around'>
          <Button>Search</Button>
          <span className='pl-4 pr-4' />
          <Button>Add Task</Button>
        </div>
      </div>
    </main>
  )
}
