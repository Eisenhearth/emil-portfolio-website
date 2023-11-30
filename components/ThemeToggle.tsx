"use client";

import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";



const ThemeToggle = () => {
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
    <div className='flex object-maintain' onClick={() => setDarkMode(!darkMode)}>
        {darkMode  ? (
            <MdLightMode className = "w-6 md:w-9 h-auto fill-[#fffff4]"/>
        ): (
            <MdDarkMode className = "w-6 md:w-9 h-auto fill-black" />
        )}
    </div>
  )
}

export default ThemeToggle