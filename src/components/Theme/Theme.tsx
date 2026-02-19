'use client'
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { ClaudeLogo, GeminiLogo, MetaIconOutline, OpenAILogo1 } from "../icon";

const iconArray = [

    {
        title: "Open AI",
        circle: "circle-4",
        icon: <OpenAILogo1 className="size-6" />
    },
    {
        title: "Claude",
        circle: "circle-3",
        icon: <ClaudeLogo className="size-4" />
    },
    {
        title: "Github Copilot",
        circle: "circle-2",
        icon: <MetaIconOutline className="size-6" />
    },
    {
        title: "Gemini",
        circle: "circle-1",
        icon: <GeminiLogo className="size-4" />
    },
]
const Theme = () => {

    const [theme, setTheme] = useState("light")

    /* 
    using useTheme hook const {theme, setTheme} = useTheme()
    // const handleThemeChange = ()=>{
    //     setTheme(theme === "dark"? "light":"dark")
    // }
    */
    const handleThemeChange = () => {
        const currentTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
        document.documentElement.classList.toggle("dark")
        localStorage.setItem("theme", currentTheme)
    }
    return (

        <div className="bg-background text-foreground h-screen">
            <div className="relative h-full w-full flex items-center justify-center">
                <div className="
                absolute inset-0 z-0 rounded-lg m-auto
                bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]
                bg-[size:10px_10px]     
                bg-fixed pointer-events-none">
                </div>

                <div className="relative  z-10 h-80 w-60 bg-neutral-200 dark:bg-neutral-900 shadow-2xl border border-neutral-200
                dark:border-neutral-800 rounded-xl overflow-hidden">

                    <div className="flex items-center gap-4 justify-center h-40 mask-r-from-50% mask-l-from-50% animate-marquee">
                        {iconArray.map((icon, idx) => <div key={icon.circle + idx} className={cn("rounded-full bg-neutral-300 flex items-center justify-center size-10")}>{icon.icon}</div>)}
                    </div>

                    <div className="p-4">
                        <h2 className="font-bold text-neutral-600 dark:text-white text-[8px]">
                            These LLMs are getting out of hand
                        </h2>

                        <p className="text-neutral-400 dark:text-neutral-300 text-[8px] mt-2">
                            I swear to god there's always another AI dropping and twitter goes crazy. It's all a myth guys. Like seriously, one day it's Claude, then GPT-4, then Gemini, then Claude 2, then GPT-4 Turbo. When will it end? They're all just fancy autocomplete
                        </p>


                        <button onClick={handleThemeChange} className="px-2 py-0.5 rounded-lg bg-neutral-100 text-[10px] text-black mt-4 cursor-pointer">Switch me</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Theme;


