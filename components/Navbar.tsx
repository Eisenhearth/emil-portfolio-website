'use client';

import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import { motion, useCycle, AnimatePresence, MotionConfig } from 'framer-motion';
import { navLinks } from '@/app/constant/navLinks';
import AnimatedLink from '@/app/constant/animatedLinks';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {

  const [mobileNav, setMobileNav] = useCycle(false, true)

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
    <div className='sticky w-full top-0 start-0 z-50 bg-[#fffff4] dark:bg-[#121212]'>
        <nav className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link href="/">
            <svg className="fill-black dark:fill-[#fffff4] object-cover h-6 md:h-8 w-auto ml-1 md:ml-0" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246.63 77.7">
              <path d="M61.29,47.48c0,1.66-.2,3.63-.5,5.36-.08,.44-.46,.77-.91,.77H19.46c-.72,0-1.16,.78-.79,1.4,2.48,4.21,6.93,6.83,11.84,6.83,4.18,0,8.07-1.84,10.85-5.38,.21-.27,.55-.41,.89-.35l15.48,2.78c.6,.11,.93,.75,.67,1.3-.35,.73-.79,1.62-1.04,2.08h.01s-.26,.43-.26,.43c-.24,.4-.48,.79-.77,1.23-.36,.55-.69,1.02-1.02,1.46l-.2,.27h-.02c-.11,.14-.22,.28-.33,.42l-.17,.21c-.22,.27-.42,.51-.63,.76l-.18,.21c-.34,.39-.68,.75-1.06,1.14l-.21,.21c-.24,.24-.49,.48-.74,.72l-.07,.07c-.27,.26-.55,.51-.83,.75l-.31,.26-.35-.3,.3,.35c-.43,.37-.84,.69-1.25,1l-.35,.26c-.48,.35-.96,.69-1.46,1.01l-.14,.09c-.57,.37-1.15,.71-1.73,1.03l-.17,.09c-.14,.08-.28,.15-.42,.22l-.1,.05c-.27,.14-.51,.26-.75,.38l-.14,.07c-.55,.26-1.06,.49-1.57,.71l-.1,.04c-.35,.14-.65,.26-.96,.37l-.37,.14c-.38,.13-.76,.26-1.14,.38l-.07,.02c-.41,.13-.84,.25-1.34,.38l-.35,.09c-.88,.22-1.76,.39-2.64,.53l-.33,.05c-.93,.13-1.85,.23-2.76,.28l-.34,.02c-.55,.02-.99,.03-1.42,.03s-.89-.01-1.42-.04c-.11,0-.21-.01-.32-.02h-.1c-.35-.03-.69-.05-1.04-.08h-.11c-.1-.02-.2-.03-.3-.04-.5-.05-.94-.11-1.35-.17h-.01s-.01,0-.02,0l-.24-.04c-.37-.06-.75-.12-1.12-.2l-.4-.08c-.33-.07-.66-.14-.99-.22l-.1-.03c-.1-.02-.19-.05-.29-.07-.49-.13-.92-.25-1.31-.37-.44-.13-.86-.28-1.28-.43-.1-.04-.2-.07-.3-.11l-.08-.03c-.31-.12-.62-.24-.93-.36l-.08-.03c-.09-.04-.19-.08-.28-.12-.41-.17-.82-.35-1.22-.54l-.04-.02c-.36-.17-.76-.37-1.15-.58-.09-.05-.18-.1-.27-.15l-.07-.04c-.29-.16-.57-.32-.85-.48l-.34-.2c-.38-.23-.75-.46-1.11-.7-3.65-2.43-6.79-5.68-9.08-9.39-.19-.31-.38-.62-.56-.94l-.08-.15c-.17-.31-.33-.62-.5-.93l-.09-.17c-.05-.09-.1-.19-.15-.28-.58-1.18-1.09-2.43-1.53-3.73-.24-.72-.42-1.33-.58-1.91-.12-.47-.24-.97-.34-1.46-.31-1.49-.5-3.01-.58-4.54-.03-.51-.04-1.04-.04-1.56s.01-1.04,.04-1.56c.14-2.68,.64-5.34,1.5-7.91,.28-.85,.57-1.6,.87-2.3,.17-.41,.36-.81,.55-1.2,.05-.09,.09-.19,.14-.28l.11-.23c.05-.09,.09-.19,.14-.28,.05-.1,.1-.19,.15-.28l.27-.49c.21-.38,.43-.76,.66-1.13,2.29-3.71,5.43-6.96,9.08-9.39,.36-.24,.74-.48,1.11-.7l.34-.2c.28-.17,.57-.33,.85-.48l.07-.04c.09-.05,.18-.1,.28-.15,.39-.21,.78-.41,1.18-.6,.41-.19,.81-.37,1.22-.55,.09-.04,.19-.08,.28-.12l.08-.03c.31-.12,.61-.24,.93-.36l.09-.03c.1-.04,.19-.07,.29-.11,.42-.15,.85-.29,1.28-.43,.44-.13,.87-.25,1.31-.37,.09-.02,.19-.05,.29-.07l.1-.03c.33-.08,.66-.15,.99-.23l.23-.05c.4-.08,1.05-.2,1.45-.26h.07s.01-.01,.02-.01h.01c.4-.06,.84-.12,1.35-.17,.1-.01,.2-.02,.3-.03h.11c.34-.04,.69-.07,1.04-.09h.08c.11-.01,.22-.02,.34-.02,.53-.02,.99-.04,1.42-.04s.87,.01,1.4,.03l.34,.02c.93,.05,1.85,.14,2.75,.27l.37,.06c.87,.14,1.75,.32,2.61,.53l.38,.1c.49,.13,.92,.25,1.32,.37l.07,.02c.4,.13,.78,.25,1.15,.39,.11,.04,.23,.08,.35,.12,.35,.13,.65,.25,.96,.37l.15,.06c.5,.21,1.02,.44,1.55,.7l.13,.06c.26,.13,.5,.25,.74,.37l.08,.04-.19,.41,.24-.39c.15,.08,.29,.15,.42,.23,.52,.29,1.36,.79,1.87,1.11l.06,.04c.53,.34,1.04,.69,1.52,1.05l.08,.06c.1,.07,.2,.15,.3,.22,.42,.32,.82,.64,1.25,1.01l.25,.21c.32,.27,.64,.55,.94,.85l.08,.08c.25,.23,.49,.47,.73,.71l.19,.19c.39,.4,.73,.77,1.05,1.14l-.3,.35,.35-.3,.16,.19c.21,.24,.41,.48,.61,.73l.19,.24c.23,.3,.46,.59,.69,.9l.03,.04c.18,.24,.36,.49,.53,.74l.33,.5c.15,.22,.29,.45,.43,.67l.57,.94h0c1.14,2,2.05,4.11,2.69,6.28,.83,2.78,1.25,5.65,1.25,8.53Zm-18.06-7.66c-.72-4.25-5.64-7.57-11.89-7.57-5.69,0-11.09,3.29-11.89,7.55-.11,.57,.33,1.09,.91,1.09h21.96c.57,0,1.01-.52,.91-1.08Zm107.78,2.67v33.4h-19.05V43.4c0-2.14-.12-4.6-1.02-6.58-.41-.84-.96-1.54-1.62-2.05-1.08-.84-2.47-1.26-4.26-1.26-3.32,0-5.89,1.14-6.71,2.98-.93,2-.93,4.72-.93,6.91v32.49h-17.67c-.51,0-.92-.41-.92-.92l-.04-31.57c0-2.14-.12-4.6-1.02-6.58-.41-.84-.96-1.54-1.62-2.05-1.08-.84-2.47-1.26-4.26-1.26-3.32,0-5.89,1.14-6.71,2.98-.93,2-.93,4.72-.93,6.91v32.49h-19.05V18.18h17.97v3.37c13.25-9.83,26.37,.47,26.5,.58,.46,.36,.9,.75,1.3,1.14,.63,.64,1.2,1.26,1.73,1.88,1.05-1.51,2.49-2.93,4.19-4.14,1.77-1.26,3.67-2.19,5.52-2.69,10.89-3.72,20.34,3.73,20.43,3.81,.46,.36,.9,.75,1.3,1.14h0c5.88,5.92,6.88,10.71,6.88,19.22ZM175.62,.92V12.7c0,.51-.41,.92-.92,.92h-16.13c-.51,0-.92-.41-.92-.92V.92c0-.51,.41-.92,.92-.92h16.13c.51,0,.92,.41,.92,.92Zm0,18.18v55.87c0,.51-.41,.92-.92,.92h-16.13c-.51,0-.92-.41-.92-.92V19.1c0-.51,.41-.92,.92-.92h16.13c.51,0,.92,.41,.92,.92ZM201.22,.92V74.97c0,.51-.41,.92-.92,.92h-17.05c-.51,0-.92-.41-.92-.92V.92c0-.51,.41-.92,.92-.92h17.05c.51,0,.92,.41,.92,.92Zm36.05,2.76c1.72,.97,2.19,3.24,.99,4.82l-8.11,10.67v.22l12.79-1.69c1.96-.26,3.69,1.26,3.69,3.24v.02c0,1.96-1.71,3.47-3.65,3.24l-12.83-1.53v.22l8.1,10.12c1.25,1.57,.81,3.88-.93,4.87l-.39,.22c-1.69,.97-3.85,.24-4.62-1.55l-5.11-11.92h-.22l-5.54,12.01c-.83,1.79-3.04,2.45-4.71,1.39l-.03-.02c-1.63-1.03-2.02-3.24-.83-4.77l8.16-10.48v-.22l-12.48,1.6c-1.95,.25-3.68-1.27-3.68-3.24h0c0-1.97,1.73-3.49,3.68-3.24l12.37,1.6v-.22l-7.98-10.36c-1.21-1.57-.75-3.84,.96-4.82l.28-.16c1.68-.96,3.82-.26,4.61,1.5l5.3,11.88h.22l5.21-11.96c.77-1.78,2.92-2.49,4.6-1.54l.15,.08Z"/>
            </svg>
          </Link>
       
          <motion.div 
          variants={{
            open: {
              y: "0%",
              opacity: 1,
            },
            close: {
              y: "25%",
              opacity: 0,
            }
          }}
          className='flex md:hidden gap-6 mr-1  items-center relative z-10'>
            <ThemeToggle />

            <motion.button 
              animate={mobileNav ? "open" : "closed"}
              onClick={() => setMobileNav()} 
              className='flex flex-col space-y-1'
            >
              <motion.span variants={{
                closed: {rotate: 0, backgroundColor: darkMode ? "white": "black" },
                open: {rotate: 45, y: 5, backgroundColor: "white" }
              }} className='w-6 h-[1.2px] block'></motion.span>
              <motion.span variants={{
                closed: {opacity: 1, backgroundColor: darkMode ? "white": "black"  },
                open: {opacity: 0}
              }} className='w-6 h-[1.2px] block'></motion.span>
              <motion.span variants={{
                closed: {rotate: 0, backgroundColor: darkMode ? "white": "black" },
                open: {rotate: -45, y: -5, backgroundColor: "white" }
              }} className='w-6 h-[1.2px] block'></motion.span>
            </motion.button>
          </motion.div>

          <AnimatePresence>
          {mobileNav &&
          <MotionConfig>
            <motion.div
            key="mobile-nav"
             variants={{
              open: {
                x: "0%",
                transition: {
                  type: "spring",
									bounce: 0.1,
                  when: "beforeChildren",
                  staggerChildren: 1,
                },
              },
              closed: {
                x:"100%",
                transition: {
                  type: "spring",
									bounce: 0.1,
                  when: "afterChildren",
                  staggerChildren: 1,
                },
              },
            }}
            initial="closed"
            animate="open"
            exit="closed"
            className='fixed inset-0 bg-black space-y-10 p-6 container flex flex-col justify-center lg:hidden'>
              <div>
                <motion.ul 
                variants={{
										closed: {
											y: "50%",
											opacity: 0,
										},
										open: {
											y: "0%",
											opacity: 1,
										},
									}} className='text-white font-Condensed'>

                  {navLinks.map((nav) => (
                  
                    <Link key={nav.id} onClick={() => setMobileNav()} href={nav.link}>
                      <motion.li key={nav.id} className='text-6xl font-bold py-3'>{nav.title}</motion.li>
                    </Link>
                  ))}
                </motion.ul>
              </div>
               
            </motion.div>
            </MotionConfig>
          }
          </AnimatePresence>

          <div className='hidden md:flex'>
            <ul className='flex items-center gap-8 font-Condensed text-lg font-black dark:text-[#fffff4] mx-auto'>
            {navLinks.map((nav) => (
           
              <div className='relative overflow-hidden'>
                <Link href={nav.link} key={nav.id}><AnimatedLink key={nav.id} title={nav.title}/></Link>
              </div>
            ))}
            </ul>
          </div>

          <div className='hidden md:flex object-maintain'>
            <ThemeToggle />
          </div>

        </nav>
    </div>
  )
}

export default Navbar