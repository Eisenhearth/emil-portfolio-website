"use client"
import React, { useEffect }  from 'react'

const BubbleText = () => {
  
    useEffect(() => {
        const spans = document.querySelectorAll(
            ".hover-text span"
        ) as NodeListOf<HTMLSpanElement>;

        spans.forEach((span) => {
            span.addEventListener("mouseenter", function (this: typeof span){
                this.style.fontWeight = "900";
                this.style.color = "rgba(0, 0, 0, 1)";

                const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
                const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

                if (leftNeighbor) {
                    leftNeighbor.style.fontWeight = "900";
                    leftNeighbor.style.color ="rgba(0, 0, 0, 1)";
                }
                if (rightNeighbor) {
                    rightNeighbor.style.fontWeight = "900";
                    rightNeighbor.style.color ="rgba(0, 0, 0, 1)";
                }
            });

            span.addEventListener("mouseleave", function (this: typeof span) {
                this.style.fontWeight = "500";
                this.style.color = "rgba(0, 0, 0, 1)";

                const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
                const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

                if(leftNeighbor) {
                    leftNeighbor.style.fontWeight = "500";
                    leftNeighbor.style.color = "rgba(0, 0, 0, 1)";
                  }
                if(rightNeighbor) {
                    rightNeighbor.style.fontWeight = "500";
                    rightNeighbor.style.color = "rgba(0, 0, 0, 1)";
                  }
            });
        });
    }, []);

  return (
    <div className='flex flex-col gap-2'>
      <p className="hover-text font-Condensed text-xl lg:text-2xl font-normal uppercase tracking-[2.56px] lg:leading-[100%]">
        <Text>I'm a Web Developer
        and a Graphics Designer
        based in Philippines.</Text>
     </p>
      <p className="hover-text font-Condensed text-xl lg:text-2xl font-normal uppercase tracking-[2.56px] leading-[100%]">
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
