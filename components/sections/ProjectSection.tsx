'use client'
import React, { useRef } from 'react'
import { FiArrowRight } from "react-icons/fi"
import { useMotionValue, motion, useSpring, useTransform  } from 'framer-motion';
import { ProjectList } from '@/app/constant/ProjectsList';

export const ProjectSection = () => {
  return (
    <div>
      <div className='max-w-screen-xl mx-auto px-4 overflow-x-hidden'>
        <div className='flex flex-col my-6 md:my-16 gap-3 text-black'>
                <h1 className='font-Oswald text-5xl md:text-6xl lg:text-8xl font-black'>
                    MY PROJECTS*
                </h1>
                <p className='font-Condensed text-xl md:text-4xl font-normal'>
                          ( as of now )
                </p>
        </div>

        <div className='overflow-y-hidden overflow-x-hidden'>

          {ProjectList.map((project) => (
            <Link
            heading={project.heading}
            subheading={project.subheading}
            type={project.type}
            imgSrc={project.imgSrc}
            href={project.href}
          />
          ))}

        </div>
      </div>
    </div>
  );
};

interface LinkProps {
    heading: string;
    imgSrc: string;
    subheading: string;
    type: string;
    href: string;
}

const Link =({ heading, imgSrc, subheading, type, href }: LinkProps) => {
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
        className="group relative flex items-center justify-between border-b-2 border-neutral-500 py-4 transition-colors duration-500 hover:border-neutral-950 md:py-8"
        >
            <div>
                <motion.span className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-950 md:text-5xl font-Oswald uppercase">
                    {heading}
                </motion.span>
                <div className='flex gap-3'>
                  <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-950 font-Condensed font-bold">
                      {subheading}
                  </span>
                  <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-950 font-Condensed font-bold">
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
                className="absolute z-0 h-24 w-32 object-cover md:h-48 md:w-64"
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
                <FiArrowRight className="text-5xl text-neutral-950" />
            </motion.div>
        </motion.a>
    );
};


