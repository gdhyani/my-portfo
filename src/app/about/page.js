"use client"
import TechSkill from "@/components/techSkill";
import Image from "next/image";
import Education from "@/components/education";
export default function About(){
    return(
        <main className="flex flex-col min-h-screen max-w-7xl m-auto sm:mt-5">
            <TechSkill/>
            <section className="mx-4 mt-5 md:mx-0 bg-[#131315] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-3xl py-10 flex flex-col">
                <div className="flex flex-col sm:mb-16 w-full text-center mb-5">
                    <Image
                        className="m-auto"
                        src="/edu.svg"
                        width={100}
                        height={100}
                        alt="png"
                    ></Image>
                    <h1 className="opacity-50 text-xl mb-5">
                        Background Section
                    </h1>
                    <h1 className="text-4xl sm:text-6xl font-bold">
                        Education and Career
                    </h1>
                </div>
                <Education/>
            </section>
        </main>
    )
}