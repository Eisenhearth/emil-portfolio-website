"use client"
import React, { useEffect, useState  }  from 'react'


const BubbleText = () => {
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

  
    useEffect(() => {
        const spans = document.querySelectorAll(
            ".hover-text span"
        ) as NodeListOf<HTMLSpanElement>;

        spans.forEach((span) => {
            span.addEventListener("mouseenter", function (this: typeof span){
                this.style.fontWeight = "900";
                this.style.color = darkMode ? "[#fffff4]" : "#000000";

                const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
                const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

                if (leftNeighbor) {
                    leftNeighbor.style.fontWeight = "900";
                    leftNeighbor.style.color = darkMode ? "[#fffff4]" : "#000000";;
                }
                if (rightNeighbor) {
                    rightNeighbor.style.fontWeight = "900";
                    rightNeighbor.style.color = darkMode ? "[#fffff4]" : "#000000";;
                }
            });

            span.addEventListener("mouseleave", function (this: typeof span) {
                this.style.fontWeight = "500";
                this.style.color = darkMode ? "[#fffff4]" : "#000000";;

                const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
                const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

                if(leftNeighbor) {
                    leftNeighbor.style.fontWeight = "500";
                    leftNeighbor.style.color = darkMode ? "[#fffff4]" : "#000000";;
                  }
                if(rightNeighbor) {
                    rightNeighbor.style.fontWeight = "500";
                    rightNeighbor.style.color = darkMode ? "[#fffff4]" : "#000000";;
                  }
            });
        });
    }, []);

  return (
    <div className='flex flex-col gap-2'>
      <p className="hover-text font-Condensed text-xl lg:text-2xl font-normal uppercase tracking-[2.56px] lg:leading-[100%] dark:text-[#fffff4]">
        <Text>I&apos;m a Web Developer
        and a Graphics Designer
        based in Philippines.</Text>
     </p>
      <p className="hover-text font-Condensed text-xl lg:text-2xl font-normal uppercase tracking-[2.56px] leading-[100%] dark:text-[#fffff4]">
        <Text>focusing on creating
        good  quality but 
        purposeful design* </Text>
     </p>
    </div>
  )
};

const Text = ({children} : {children: string}) => {
    return (
        <>
            {children.split("").map((child, idx) => (
            <span
            style={{
                transition: "0.20s font-weight, 0.20s color",
            }}
            key={idx}
            >
            {child}
            </span>
            ))}
        </>
    )
}

export default BubbleText;
