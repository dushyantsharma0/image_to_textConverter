'use client'
import React, { useState } from 'react'
import Tesseract from 'tesseract.js'


const page = () => {
    
  const [image, setImage] = useState(null)
  const [text, setText] = useState(null)
  const [language, setLanguage] = useState('eng')

  function handelChange(e){
    const image=e.target.files[0]
    setImage(image)
    console.log(image)
  }
  const handleImageToText=async()=>{
   if(image!=undefined){
    Tesseract.recognize(image,language).then((res)=>{
        setText(res.data.text)
    }).catch((err)=>{
        console.log(err)
    })

   }else{
     alert('please select an image')
   }

  }
  const copyToClipboard = () => {
    const textToCopy = text;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Text copied to clipboard');
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  }
    
  return (
    <>
   
    <div className=' flex justify-center'>
    
        <br/>
    <div>
    <h1 className=' ml-[-120px] text-5xl text-[#e28686] underline'>image to text converter</h1>
        <br/><br/><br/>
  
   <div className='flex gap-4'>
    <h1>Select Language</h1>
   <select className='text-black rounded-[5px] ' onChange={(e)=>setLanguage(e.target.value)}>
    <option value="eng" key="eng">english</option>
        <option value="hin" key="hin">hindi</option>
        <option value="hin+eng" key="">hin+eng</option>
    </select>
   </div>
    <br/>
    <div className='flex gap-4'>
    <p className=''>Select image</p><br/>
    <div className='bg-red-500  rounded-[5px] w-[100px] overflow-hidden'><input type='file' onChange={handelChange} /></div>
    </div>
   <br/>
    <br/>
    <button  onClick={handleImageToText} className='bg-[skyblue] p-3 ml-4 rounded-[10px] font-[800] text-black'>Conver Image into Text</button>
    </div>
    </div>
    <br/><br/>
    {
        text ?
        <div className='text-center'>
                         <button className=' absolute right-10 bg-[#87ebd4] p-3 ml-4 rounded-[10px] font-[800] text-black'   onClick={copyToClipboard}>Copy Text</button>

             <h1 className='text-center  underline text-2xl '>Your Text is</h1>
             <br/>
            <h1 className='text-2xl text-white'>{text}</h1>
            <br/>
            

        </div>:<div className='flex justify-center'>
<div className=' relative  h-[250px] bg-red-900 w-[400px] overflow-hidden  '>
<img className=' absolute  h-[300px] w-[400px]  left-0 top-0 ' src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDFnaHk4bGFrcHRhcnMwaDBoaGVvcnI5OXQ1ODU1ZmdtcnJ6dHhyeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1UTnNZF2vvykzdxEo9/giphy.webp" alt="" />
 <div  className=' absolute  h-[300px] w-[400px]  left-0 top-0 ' ></div>
    </div> 
    </div>   
    }

    </>
  )
}

export default page