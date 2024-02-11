"use client";
import Image from "next/image";
import {
    PiGithubLogoThin,
    PiLinkedinLogoThin,
    PiFileTextThin,
    PiTwitterLogoThin,
} from "react-icons/pi";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

import TechSkill from "@/components/techSkill";
import WorkSec from "@/components/workSec";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen max-w-7xl m-auto sm:mt-5">
            {/* first section */}
            <section className=" mx-4 md:mx-0 flex flex-col sm:h-[450px] sm:flex-row gap-5">
                <div className="bg-[#131315] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-2xl px-7 flex flex-col pb-5">
                    <Image
                        className="m-auto"
                        src="/main.svg"
                        height={380}
                        width={380}
                        alt="pnh"
                    ></Image>
                    <h1 className="text-3xl sm:text-4xl max-w-lg text-center mb-2 sm:mb-4 font-bold">
                        Gaurav Dhyani
                        <span className="ml-2 text-3xl sm:text-4xl opacity-40 text-center">
                            a Software Engineer and a FullStack Web Developer.
                        </span>
                    </h1>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="bg-[#131315] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-2xl py-7 px-5 flex flex-row justify-between items-center">
                        <div className="">
                            <h1 className="text-xl font-semibold opacity-40">
                                Title
                            </h1>
                            <h1 className="text-2xl font-semibold">
                                Software Engineer /
                            </h1>
                            <h1 className="text-2xl font-semibold">
                                FullStack Web Developer
                            </h1>
                        </div>
                        <div className="">
                            <Image
                                width={90}
                                height={90}
                                src="title.svg"
                                alt="png"
                            ></Image>
                        </div>
                    </div>
                    <div className="flex flex-row justify-around">
                        <div className="bg-[#131315] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:bg-black hover:text-white rounded-3xl p-4">
                            <Link href="https://www.github.com/gdhyani"><PiGithubLogoThin size={50} /></Link>
                        </div>
                        <div className="bg-[#131315] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:bg-[#0a66c2] hover:text-white rounded-3xl p-4">
                            <Link href="https://www.linkedin.com/in/gaurav-dhyani-/" ><PiLinkedinLogoThin size={50} /></Link>
                        </div>
                        <div className="bg-[#131315] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:bg-[#38bdf8] hover:text-white rounded-3xl p-4">
                            <PiTwitterLogoThin size={50} />
                        </div>
                        <div className="bg-[#131315] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:bg-[#e11d48] hover:text-white rounded-3xl p-4">
                            <Link href="https://drive.google.com/file/d/1K16SdD8-v_sTL4KNTMu5WiYLRPJqPvQO/view?usp=sharing"><PiFileTextThin size={50} /></Link>
                        </div>
                    </div>
                    <div className="bg-[#131315] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-2xl py-8 px-5 flex flex-row justify-between items-center">
                        <div className="">
                            <h1 className="text-xl font-semibold opacity-40">
                                Based In
                            </h1>
                            <h1 className="text-2xl font-semibold">
                                New Delhi, India <br />
                                (IN)
                            </h1>
                        </div>
                        <div className="">
                            <Image
                                width={80}
                                height={80}
                                src="globe.svg"
                                alt="png"
                            ></Image>
                        </div>
                    </div>
                </div>

                <div className="bg-[#131315] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-2xl gap-2 py-10 px-5 flex flex-col justify-between   text-center">
                    <Image
                        className="self-center"
                        src="/work.svg"
                        width={100}
                        height={100}
                        alt="png"
                    ></Image>
                    <h1 className="text-4xl font-bold">Wanna work together?</h1>
                    <Link
                        className="py-4 bg-orange-600 text-xl rounded-3xl text-white font-bold"
                        href="/contact"
                    >
                        Lets Start
                    </Link>
                </div>
            </section>

            {/* SECITON2 */}
            <section className="mx-4 md:mx-0 py-10 rounded-3xl mt-10 bg-[#131315] text-white  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-5">
                <div className="flex flex-col  sm:mb-16 text-center">
                    <Image
                        className="m-auto"
                        src="/about.svg"
                        width={100}
                        height={100}
                        alt="png"
                    ></Image>
                    <h1 className="opacity-50 text-xl">About Section</h1>
                </div>
                <div className="flex flex-col sm:flex-row  rounded-3xl m-auto sm:w-10/12 mb-5">
                    <h1 className=" text-4xl mb-5 text-center  sm:text-6xl font-bold mt-5">
                        Little Bit About Me ...
                    </h1>
                    <h1 className="sm:w-4/6 text-lg font-mono text-center sm:text-left opacity-70">
                        Let me give you a short intro about myself. I’m Gaurav
                        Dhyani, Software Engineer, a passionated FullStack Web
                        Developer and a coffee lover from New Delhi, India. I
                        learned Web Development from various online courses and
                        attended events to gain knowledge. I am also a certified
                        FullStack Developer from Google. With over 2 years of
                        experience in this field, I have dedicated myself to
                        creating exceptional user experiences that blend
                        functionality and aesthetics seamlessly. I have worked
                        for a few companies and currently I am freelancing. My
                        main focus is to bring profit to both the business owner
                        and customer.
                    </h1>
                </div>
            </section>

            {/* section3 */}
            <section className="mx-4 md:mx-0 bg-[#131315] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mt-10 rounded-3xl py-10">
                <div className="flex flex-col mb-5 sm:mb-16 text-center px-4">
                    <Image
                        className="m-auto"
                        src="/skills.svg"
                        width={100}
                        height={100}
                        alt="png"
                    ></Image>
                    <h1 className="opacity-50 text-xl">SKILLS SECTION</h1>
                    <h1 className="text-4xl mb-5  sm:mb-14 text-center  sm:text-6xl font-bold mt-5">
                        Skills and Expertise
                    </h1>
                    <div className="flex flex-col sm:flex-row mb-5 sm:w-2/3 m-auto gap-5">
                        <div className="border rounded-3xl w-full flex p-3 hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] gap-5">
                            <Image
                                src="/problem.svg"
                                height={60}
                                width={60}
                                alt-="png"
                            />
                            <div className="text-left">
                                <h1 className="font-semibold text-xl">
                                    Problem Solving
                                </h1>
                                <h1 className="opacity-70">
                                    Innovative problem-solving and impactful
                                    solutions for a better experience.
                                </h1>
                                <h1></h1>
                            </div>
                        </div>
                        <div className="border rounded-3xl hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] w-full flex p-3 gap-5">
                            <Image
                                src="/self.svg"
                                height={60}
                                width={60}
                                alt-="png"
                            />
                            <div className="text-left">
                                <h1 className="font-semibold text-xl">
                                    Analytical Abilities
                                </h1>
                                <h1 className="opacity-70">
                                    Abilities to diagnose technology issues and
                                    fix them.
                                </h1>
                                <h1></h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:w-2/3  m-auto gap-5">
                        <div className="border hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-3xl w-full flex p-3 gap-5">
                            <Image
                                src="/Visual.svg"
                                height={60}
                                width={60}
                                alt-="png"
                            />
                            <div className="text-left">
                                <h1 className="font-semibold text-xl">
                                    Project Management
                                </h1>
                                <h1 className="opacity-70">
                                    Ability to make professional plans, set and
                                    reach goals.
                                </h1>
                                <h1></h1>
                            </div>
                        </div>
                        <div className="border hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-3xl w-full flex p-3 gap-5">
                            <Image
                                src="/pres.svg"
                                height={60}
                                width={60}
                                alt-="png"
                            />
                            <div className="text-left">
                                <h1 className="font-semibold text-xl">
                                    Curiosity
                                </h1>
                                <h1 className="opacity-70">
                                    Finding enjoyment in learning new things and
                                    learning how things work.
                                </h1>
                                <h1></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 4 */}
            <section className="mt-5">
                <TechSkill />
            </section>

            {/* section 5*/}
            {/* <section className="mt-5 text-white">
                <WorkSec />
            </section> */}
        </main>
    );
}
