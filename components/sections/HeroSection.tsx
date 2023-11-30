'use client';
import ArrowOutwardSharpIcon from '@mui/icons-material/ArrowOutwardSharp';
import React, {useState, useEffect, MouseEventHandler, ReactNode, useRef} from 'react'
import BubbleText from '../BubbleText';
import Link from 'next/link';
import { useAnimate } from "framer-motion";

const HeroSection = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
      const theme = localStorage.getItem("theme")
      if (theme === "dark") setDarkMode(true)
  }, [])

  useEffect(() => {
      if (darkMode) {
          document.documentElement.classList.add('dark')
          localStorage.setItem("theme", "dark")
      } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light")
      }
  }, [darkMode])

  return (    
    <div className='max-w-screen-xl mx-auto z-10 py-10 md:py-0 my-10 md:my-0 md:mb-20'>
          <MouseImageTrail
                  renderImageBuffer={50}
                  rotationRange={25}
                  images={[
                    "/images/myself/my_pic_1.png",
                    "/images/myself/my_pic_2.png",
                    "/images/myself/my_pic_3.png",
                    "/images/myself/my_pic_4.png",
                    "/images/myself/my_pic_5.png",
                    "/images/rog_listing_project.jpg",
                    "/images/hoobank_website.jpg",
                    "/images/international_bookstore_website.jpg",
                    "/images/HomeSmart_website.jpg",
                    "/images/HITC_project.jpg",

                ]}>
        <div className="grid grid-cols-5 gap-4  md:gap-0">
       
            <div className="col-span-5 md:col-span-3 px-4 md:px-0 order-1">
             
              <h1 className='font-Oswald font-black text-[110px] md:text-[250px] lg:text-[370px] leading-[0.78] md:tracking-[.85] dark:text-[#fffff4]'>EMIL</h1>
              
            </div>
           

            <div className="col-span-5 md:col-span-2 flex flex-col gap-5 justify-center order-3 md:order-2 md:order-0 px-4 md:px-0">
             <BubbleText />

              <div className="flex gap-6 text-xl lg:text-2xl font-black font-Condensed">
                <Link href='/about'><button className='flex items-center button'>KNOW ME MORE <ArrowOutwardSharpIcon /></button></Link>
                <Link href='https://drive.google.com/file/d/13FtJfhpFw5b1_sT1T2roLhk5mQAYKE2L/view?usp=sharing' target="_blank"><button className='flex items-center button'>GET MY CV <ArrowOutwardSharpIcon /></button></Link>
              </div>
            </div>

            <div className='col-span-5 order-2 md:order-3 px-4 md:px-0'>
             
              <h1 className='font-Oswald font-black text-[110px] md:text-[250px] lg:text-[370px] leading-[0.90] md:tracking-[-19.05px] dark:text-[#fffff4]'>MANDIA*</h1>
            </div>
        </div>
        </MouseImageTrail>
      </div>
  )
};


const MouseImageTrail = ({
  children,
  images,
  renderImageBuffer,
  rotationRange,
}  : {
  children: ReactNode;
  images: string[];
  renderImageBuffer: number;
  rotationRange: number;
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector) as HTMLElement;

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 0.5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-24 w-auto  bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};



export default HeroSection