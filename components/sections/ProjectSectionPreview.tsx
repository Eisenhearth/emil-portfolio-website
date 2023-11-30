'use client'
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi"
import ArrowOutwardSharpIcon from '@mui/icons-material/ArrowOutwardSharp';
import Link from 'next/link'


export const ProjectSectionPreview = () => {
  return (
    <motion.div 
      initial ={{ opacity: 0.5, scale: 0.5 }}
      whileInView={{opacity: 1, scale: 1}}
      transition={{duration: 1 }}
      viewport={{once: true }}
    className="bg-neutral-950 rounded-2xl md:rounded-3xl my-20 md:my-0 dark:bg-[#282828]  ">
      <section className="px-4 py-6 max-w-screen-xl mx-auto">
        <div className='flex flex-col my-6 md:my-10 gap-3'>
                      <h1 className='text-[#fffff4] font-Oswald text-5xl md:text-6xl lg:text-8xl font-black'>
                          MY PROJECTS*
                      </h1>
                      <p className='text-[#fffff4] font-Condensed text-xl md:text-4xl font-normal'>
                          ( as of now )
                      </p>
        </div>
        <div>
          <LinkPrev
            heading="ROG Listing Design"
            subheading="2021"
            type="GRAPHICS DESIGN"
            imgSrc="/images/rog_listing_project.jpg"
            href="https://www.behance.net/gallery/156778855/ASUS-ROG-LISTING-DESIGN"
          />
          <LinkPrev
            heading="International Bookstore"
            subheading="2021"
            type="FRONTEND DEVELOPMENT"
            imgSrc="/images/international_bookstore_website.jpg"
            href="https://international-bookstore.vercel.app/"
          />
          <LinkPrev
            heading="Home Smart Website"
            subheading="2021"
            type="FRONTEND DEVELOPMENT"
            imgSrc="/images/HomeSmart_website.jpg"
            href="https://main--velvety-fox-f0cd44.netlify.app/"
          />
        </div>

        <div className="w-full text-white justify-center flex mt-5 md:mt-12">
          <Link href='/my-projects'> <button className='flex items-center project-button text-2xl md:text-4xl'>VIEW ALL <ArrowOutwardSharpIcon className=" text-4xl md:text-5xl" /></button></Link>
        </div>
      </section>
    </motion.div>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  type: string;
  href: string;
}

const LinkPrev = ({ heading, imgSrc, subheading, type, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      target="_blank"
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-[#fffff4] md:py-8"
    >
      <div>
        <motion.span className="relative z-10 block text-3xl md:text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-[#fffff4] font-Oswald uppercase"
        >
          {heading}
        </motion.span>
        <div className="flex gap-3 mt-2">
          <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-[#fffff4] font-Condensed font-bold">
            {subheading}
          </span>
          <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-[#fffff4] font-Condensed font-bold">
            {type}
          </span>
        </div>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-12 w-16 object-cover md:h-48 md:w-64 z-20"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
