import Image from "next/image";
import {
    PiGithubLogoThin,
    PiLinkedinLogoThin,
    PiFileTextThin,
    PiTwitterLogoThin,
} from "react-icons/pi";
import Link from "next/link";
export default function Home() {
    return (
        <main className="flex flex-col min-h-screen max-w-7xl m-auto mt-5">
            {/* first section */}
            <section className="flex flex-col sm:h-[450px] sm:flex-row gap-5">
                <div className="bg-white rounded-2xl px-7 flex flex-col pb-5">
                    <Image
                        className="m-auto -mb-6"
                        src="/4.svg"
                        height={200}
                        width={200}
                        alt="pnh"
                    ></Image>
                    <h1 className="text-5xl text-center mb-2 sm:mb-4 font-bold">
                        I'm Gaurav Dhyani
                    </h1>
                    <h1 className="text-xl opacity-50 text-center">
                        A Software Engineer and a FullStack Web Developer.
                    </h1>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="bg-white rounded-2xl py-7 px-5 flex flex-row justify-between items-center">
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
                        <div className="bg-white hover:bg-black hover:text-white rounded-3xl p-4">
                            <PiGithubLogoThin size={50} />
                        </div>
                        <div className="bg-white hover:bg-[#0a66c2] hover:text-white rounded-3xl p-4">
                            <PiLinkedinLogoThin size={50} />
                        </div>
                        <div className="bg-white hover:bg-[#38bdf8] hover:text-white rounded-3xl p-4">
                            <PiTwitterLogoThin size={50} />
                        </div>
                        <div className="bg-white hover:bg-[#e11d48] hover:text-white rounded-3xl p-4">
                            <PiFileTextThin size={50} />
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl py-8 px-5 flex flex-row justify-between items-center">
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

                <div className="bg-white  rounded-2xl gap-2 py-10 px-5 flex flex-col justify-between   text-center">
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
                        href="/"
                    >
                        Lets Start
                    </Link>
                </div>
            </section>

            {/* SECITON2 */}
            <section className="py-10 rounded-3xl mt-10 bg-white p-5">
                <div className="flex flex-col mb-5 sm:mb-16 text-center">
                    <Image
                        className="m-auto"
                        src="/about.svg"
                        width={100}
                        height={100}
                        alt="png"
                    ></Image>
                    <h1 className="opacity-50 hidden sm:block text-xl">About Me</h1>
                </div>
                <div className="flex flex-col sm:flex-row  rounded-3xl m-auto w-fit">
                    <h1 className=" text-4xl mb-5 text-center  sm:text-6xl font-bold mt-5">
                        Little Bit About Me ...
                    </h1>
                    <h1 className="sm:w-4/6 text-lg font-mono">
                        Let me give you a short intro about myself. I’m Gaurav
                        Dhyani, Software Engineer, a passionated FullStack Web
                        Developer and a coffee lover from New Delhi, India. I
                        learned Web Development from various online courses and
                        attended events to gain knowledge. I am also a certified
                        FullStack Developer from Google.With over 2 years of
                        experience in this field, I have I have dedicated myself
                        to creating exceptional user experiences that blend
                        functionality and aesthetics seamlessly. I have worked
                        for a few companies and currently I am freelancing. My
                        main focus is to bring profit to both the business owner
                        and customer.
                    </h1>
                </div>
            </section>
        </main>
    );
}
