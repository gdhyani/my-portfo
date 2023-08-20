import Image from "next/image";
import {
    PiGithubLogoThin,
    PiLinkedinLogoThin,
    PiFileTextThin,
    PiTwitterLogoThin,
} from "react-icons/pi";
import Link from "next/link"
export default function Home() {
    return (
        <main className="flex min-h-screen max-w-7xl m-auto mt-5">
            {/* first section */}
            <section className="flex flex-col gap-5">
                <div className="bg-white rounded-2xl py-3 px-5 flex flex-col  items-center justify-center">
                    <Image
                        className="m-auto self-center justify-self-center"
                        src="/4.svg"
                        height={200}
                        width={200}
                        alt="pnh"
                    ></Image>
                    <h1 className="text-3xl text-left font-bold">
                        I'm Gaurav Dhyani
                    </h1>
                    <h1 className="text-xl opacity-50 text-center">
                        A Software Engineer and a FullStack Web Developer.
                    </h1>
                </div>
                <div className="bg-white rounded-2xl py-4 px-5 flex flex-row justify-between items-center">
                    <div className="">
                        <h1 className="text-xl font-semibold opacity-40">
                            Title
                        </h1>
                        <h1 className="text-2xl font-semibold">
                            FullStack Web Developer
                        </h1>
                    </div>
                    <div className="">
                        <Image
                            width={100}
                            height={100}
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
                <div className="bg-white rounded-2xl py-4 px-5 flex flex-row justify-between items-center">
                    <div className="">
                        <h1 className="text-xl font-semibold opacity-40">
                            Based In
                        </h1>
                        <h1 className="text-2xl font-semibold">
                            New Delhi, India
                        </h1>
                    </div>
                    <div className="">
                        <Image
                            width={100}
                            height={100}
                            src="globe.svg"
                            alt="png"
                        ></Image>
                    </div>
                </div>
                <div className="bg-white rounded-2xl gap-2 py-4 px-5 flex flex-col justify-between   text-center">
                    <Image
                        className="self-center"
                        src="/work.svg"
                        width={100}
                        height={100}
                        alt="png"
                    ></Image>
                    <h1 className="text-3xl font-semibold">Wanna work together?</h1>
                    <Link className="py-4 bg-orange-600 text-xl rounded-3xl text-white font-bold" href="/">Lets Start</Link>
                </div>
            </section>
        </main>
    );
}
