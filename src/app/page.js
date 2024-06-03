'use client'
import React from 'react';

import {useRouter} from 'next/navigation'
export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-[800] absolute top-10 text-[#f4bdbd]" >Tiger Free Service</h1>
      <img className="w-[300px] rounded-[7px]" src="https://img.freepik.com/premium-vector/black-tiger-logo-vector_14180-65.jpg" alt="" />
     <button className="bg-[#bee8be]  p-4 text-black font-[800] rounded-[7px]"  onClick={()=>router.push('/image-to-text')}>Go To Image To Text Converter</button>
     <button className="bg-[#e8c098]  p-4 text-black font-[800] rounded-[7px]"  onClick={()=>router.push('/image-to-pdf')}>Go To Image To pdf Converter</button>

    </main>
  );
}
