'use client'
import Image from "next/image";
import {useRouter} from 'next/navigation'
export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <img className="w-[500px] rounded-[7px]" src="https://www.armia.com/blog/wp-content/uploads/2022/12/Image-to-Text-OCR.jpg" alt="" />
     <button className="bg-[#bee8be]  p-4 text-black font-[800] rounded-[7px]"  onClick={()=>router.push('/image-to-text')}>Go To Image To Text Converter</button>
    </main>
  );
}
