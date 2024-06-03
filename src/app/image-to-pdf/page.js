'use client'
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { IoTabletPortraitOutline } from "react-icons/io5";
import { IoTabletLandscapeSharp } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { IoImagesOutline } from "react-icons/io5";
import { PiImageSquareBold } from "react-icons/pi"
import { FaCircleArrowRight } from "react-icons/fa6";
const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [lp, setlp] = useState(true);
  const [margin, setmargin] = useState(2);
  const [boxWidth, setboxWidth] = useState(1);
  const [pdfWidth, setpdfWidth] = useState(500);
  const [pdfHeight, setpdfHeight] = useState(620);
   const [mt, setmt] = useState(150);
   const [mb, setmb] = useState(150);
   const [lengh, setlengh] = useState();
   
  

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages(selectedFiles);
    setlengh(e.target.files.length);
    
  };

  const pdfGenerate = () => {
    var doc = new jsPDF("mm", "px", [pdfWidth, pdfHeight]);
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();

    images.forEach((image, index) => {
      var img = URL.createObjectURL(image);
      doc.addImage(img, 'JPEG', pdfHeight==400?0:width/6, pdfHeight==400?0:height/6, pdfWidth==400?400:width/2+mt, pdfHeight==400?400:height/2+mt, null, 'FAST');
      
      if (index < images.length - 1) {
        doc.addPage();
      }
    });
 
    //  alert(width/2)
    //  alert(height/2)

    doc.save('images.pdf');
  };
  function PageOrientation1(){
    setlp(true)
    setpdfWidth(500)
    setpdfHeight(620)


  }
  function PageOrientation2(){
    setlp(false)
    setpdfWidth(650)
    setpdfHeight(500)


  }
  function mone(){
    setmargin(0)
    setmt(150)
    setmb(150)
  }
  function mtwo(){
    setmargin(1)
    setmt(100)
    setmb(100)
  }
  function mthree(){
    setmargin(2)
    setmt(50)
    setmb(50)
  }
  function setpage(e){
      setboxWidth(e.target.value)
      if(e.target.value==2){
        setpdfWidth(550)
        setpdfHeight(650)
      }if(e.target.value==3){
       
        setpdfWidth(400)
        setpdfHeight(400)
        
      }
      if(e.target.value==1){
        setpdfWidth(500)
    setpdfHeight(620)
        

      }
    
  }

  return (
   <>
    <div>
      
 <div className='flex justify-center mt-4 gap-4 items-center'>
 <div className='   bg-[#e5322d] rounded-[5px] w-[200px] h-[40px] overflow-hidden'>
        <h1 className=' text-2xl ml-5 absolute'>Select File</h1>
      <input className=' w-[200px] h-[40px]  opacity-0'  type='file' multiple onChange={handleFileChange} /></div>
{
  lengh&&<h1 onClick={()=>alert(lengh)} className='bg-[green] p-2 rounded-[7px]'> Total  {lengh}</h1>
}
 </div>
      <br/><br/>
      <div className=' overfff flex gap-24 flex-wrap ml-10 pl-10 w-[70%] h-[80vh] overflow-scroll '>
        {/* Display the selected images */}
        {images.map((file, index) => (
          <div className={`  flex  justify-center  items-center bg-yellow-100  ${lp?` `:' rotate-[90deg]'} ${boxWidth==3&&'h-[200px] w-[200px]   '}  ${boxWidth==2&&'h-[260px] w-[210px]'} ${boxWidth==1&&'h-[250px] w-[200px]'} `} >
                      <img  className={  `${margin==0&&'w-[95%] h-[70%]'} ${lp?null:'rotate-[-90deg]'}  ${boxWidth==3&&' w-[100%] h-[101%] '} ${margin==1&&'w-[90%] h-[65%]'  } ${margin==2&&'w-[85%] h-[60%]'} `} key={index} src={URL.createObjectURL(file)} alt={`Image ${index}`} />

          </div>
        ))}
      </div>
    </div>
    {
      images!=""?<>
      <div className=' cursor-pointer p-3 absolute bg-white w-[25%] h-[100vh] right-0 top-0'>
        <h1 className='text-black text-3xl font-[600]' >Image to PDF options</h1>
        <br/>
        <hr/>
        <h1 className='text-black text-xl font-[600]'>Page orientation</h1>
        <br/>
        <div className='flex gap-2'>
          <div  onClick={PageOrientation1}   className={` hover w-36 h-28  flex  justify-center  items-center  border rounded-[5px] ${lp?'border-2 border-[red]':null}`}>
            <div >
            <IoTabletPortraitOutline className={`text-4xl ${lp?'text-[red]':'text-black'} `}/>
            <h1 className={`ml-[-10px] ${lp?'text-[red]':'text-black'}`}> Portrait</h1>
            </div>
          </div>
          <div onClick={PageOrientation2}  className={` hover w-36 h-28  flex  justify-center  items-center  border rounded-[5px] ${lp?null:'border-2 border-[red]'}`}>
          <div className='text-black'>
            <IoTabletLandscapeSharp className={`text-4xl ${lp?'text-black':'text-[red]'} `}/>
            <h1 className={`ml-[-10px] ${lp?'text-black':'text-[red]'}`}> Landscape</h1>
            </div>
          </div>
         
        </div>
        <br/>
          <h1 className='text-black text-xl font-[600]'>Page size</h1>
          <select onChange={setpage} className='text-black text-xl font-[400] border outline-none border-black rounded-[6px] p-1'>
          <option value="1" key="1">A4(297x210 mm)</option>
            <option value="2" key="2">US Letter(215x297.4 mm)</option>
            <option value="3" key="3">Fit(same page Size As Image)</option>
           
          </select>
          <br/><br/>
          <h1 className='text-black text-xl font-[600]'>margin</h1>
          <div className='flex gap-2'>
          <div onClick={mone} className={ `${margin==0?'border-[red] border-2':null} hover w-24 h-28  flex  justify-center  items-center  border rounded-[5px]`}>
            <div className={`${margin==0?'text-[red]':'text-black'}`}>
            <CiImageOn className=' text-4xl'/>
            <h1 className='ml-[-10px] text-xs font-[700]'> NO Margin</h1>
            </div>
          </div>
          <div onClick={mtwo} className={ `${margin==1?'border-[red] border-2':null} hover w-24 h-28  flex  justify-center  items-center  border rounded-[5px]`}>
          <div className={`${margin==1?'text-[red]':'text-black'}`}>
            <IoImagesOutline className=' text-4xl'/>
            <h1 className='ml-[0px] text-xs font-[700]'> Small</h1>
            </div>
          </div>
          <div  onClick={mthree} className={ `${margin==2?'border-[red] border-2':null} hover w-24 h-28  flex  justify-center  items-center  border rounded-[5px]`}>
          <div className={`${margin==2?'text-[red]':'text-black'}`}>
            <PiImageSquareBold className=' text-4xl'/>
            <h1 className='ml-[10px] text-xs font-[700]'> Big</h1>
            </div>
          </div>
         
        </div>
        <button
        className=" flex gap-2  items-center px-4 py-3 font-[600] text-2xl rounded-[7px] bg-[#E5322D] btn btn-outline-primary mt-5"
        onClick={pdfGenerate}
        disabled={images.length === 0}
      >
        Download pdf
        <FaCircleArrowRight/>
      </button>
      </div>
      </>:null
    }
   </>
  );
};

export default ImageUploader;
