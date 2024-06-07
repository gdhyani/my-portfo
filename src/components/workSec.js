import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
export default function WorkSec() {
    return (
        <main>
            <section className="mx-4 sm:mx-0">
                <Link
                    href="https://www.github.com/gdhyani"
                    className=" group rounded-2xl sm:w-full md:mx-0 flex flex-col bg-[#131315]"
                >
                    <div className="flex flex-col relative px-3">
                        <div className="flex sm:flex-row sm:items-center flex-col my-10 px-5 md:px-16 justify-between">
                            <div className="flex sm:gap-2 px-1 sm:px-0 flex-col">
                                <h1 className="text-3xl sm:text-5xl font-semibold ">
                                    CodeCloudAi
                                </h1>
                                <h1 className="text-xl font-medium opacity-50">
                                    Online Ai powered Coding Platform
                                </h1>
                            </div>
                            <h1 className="text-xl px-1 sm:px-0 mt-5 sm:mt-0 font-medium ">
                                write code faster and better with AI.
                            </h1>
                            <button className="hidden transition-all group-hover:bg-[#131324] sm:block p-6 rounded-full bg-white">
                                <FiArrowUpRight
                                    className="text-orange-600 group-hover:text-blue-600"
                                    size={50}
                                />
                            </button>
                        </div>
                        <div className=" max-w-full min-h-full rounded-2xl max-h-full sm:mb-6 overflow-hidden sm:mx-3">
                            <Image
                                className=" overflow-hidden h-80 sm:h-auto object-cover min-w-full group-hover:scale-105 transition-all  rounded-2xl"
                                src="/codecloud.jpg"
                                height={1000}
                                width={1000}
                                alt="img"
                            />
                            {/* only phone arrow icon */}
                            <button className="flex relative bottom-20 -mb-16 ml-auto z-10 transition-all  sm:hidden p-4 rounded-full bg-white">
                                <FiArrowUpRight
                                    className="text-black group-hover:text-orange-600"
                                    size={50}
                                />
                            </button>
                        </div>
                    </div>
                </Link>
            </section><section className="mx-4 sm:mx-0 mt-5">
                <Link
                    href="https://www.github.com/gdhyani"
                    className=" group rounded-2xl sm:w-full md:mx-0 flex flex-col bg-[#131315]"
                >
                    <div className="flex flex-col relative px-3">
                        <div className="flex sm:flex-row sm:items-center flex-col my-10 px-5 md:px-16 justify-between">
                            <div className="flex sm:gap-2 px-1 sm:px-0 flex-col">
                                <h1 className="text-3xl sm:text-5xl font-semibold ">
                                    C-Dashboard
                                </h1>
                                <h1 className="text-xl font-medium opacity-50">
                                    Enterprise Resource Planning System
                                </h1>
                            </div>
                            <h1 className="text-xl px-1 sm:px-0 mt-5 sm:mt-0 font-medium ">
                                a dashboard that can manage 5000+ users at once.
                            </h1>
                            <button className="hidden transition-all group-hover:bg-[#131324] sm:block p-6 rounded-full bg-white">
                                <FiArrowUpRight
                                    className="text-orange-600 group-hover:text-blue-600"
                                    size={50}
                                />
                            </button>
                        </div>
                        <div className=" max-w-full min-h-full rounded-2xl max-h-full sm:mb-6 overflow-hidden sm:mx-3">
                            <Image
                                className=" overflow-hidden h-80 sm:h-auto object-cover min-w-full group-hover:scale-105 transition-all  rounded-2xl"
                                src="/dashboard.jpg"
                                height={1000}
                                width={1000}
                                alt="img"
                            />
                            {/* only phone arrow icon */}
                            <button className="flex relative bottom-20 -mb-16 ml-auto z-10 transition-all  sm:hidden p-4 rounded-full bg-white">
                                <FiArrowUpRight
                                    className="text-black group-hover:text-orange-600"
                                    size={50}
                                />
                            </button>
                        </div>
                    </div>
                </Link>
            </section>
            <section className="mx-4 sm:mx-0 mt-5">
                <Link
                    href="https://www.github.com/gdhyani"
                    className=" group rounded-2xl sm:w-full md:mx-0 flex flex-col bg-[#131315]"
                >
                    <div className="flex flex-col relative px-3">
                        <div className="flex sm:flex-row sm:items-center flex-col my-10 px-5 md:px-16 justify-between">
                            <div className="flex sm:gap-2 px-1 sm:px-0 flex-col">
                                <h1 className="text-2xl sm:text-5xl font-semibold ">
                                    AlgoTrade
                                </h1>
                                <h1 className="text-xl font-medium opacity-50">
                                    Trading Algorithm
                                </h1>
                            </div>
                            <h1 className="text-xl px-1 sm:px-0 mt-5 sm:mt-0 font-medium ">
                                a data-driven python program that takes trade
                                automatically
                            </h1>
                            <button className="hidden transition-all group-hover:bg-[#131315] sm:block p-6 rounded-full bg-white">
                                <FiArrowUpRight
                                    className="text-orange-600 group-hover:text-blue-600"
                                    size={50}
                                />
                            </button>
                        </div>
                        <div className="rounded-2xl sm:mb-6 overflow-hidden sm:mx-3">
                            <Image
                                className="overflow-hidden h-80 sm:h-96 object-cover  min-w-full group-hover:scale-105 transition-all  rounded-2xl"
                                src="/trade.png"
                                height={5000}
                                width={5000}
                                alt="img"
                            />
                            {/* only phone arrow icon */}
                            <button className="flex relative bottom-20 -mb-16 ml-auto z-10 transition-all  sm:hidden p-4 rounded-full bg-white">
                                <FiArrowUpRight
                                    className="text-black group-hover:text-orange-600"
                                    size={50}
                                />
                            </button>
                        </div>
                    </div>
                </Link>
            </section>
            <section className="flex mx-4 md:mx-0 md:flex-row flex-col gap-5 mt-5 text-white">
                <div className="flex px-1 pb-3 sm:w-1/2 rounded-2xl bg-[#131315]">
                    <Link
                        className="group flex flex-col px-2"
                        href="https://www.github.com/gdhyani"
                    >
                        <div className="flex items-center flex-row my-10 justify-between">
                            <div className="flex flex-col ml-6 sm:ml-10">
                                <h1 className="text-3xl font-semibold">
                                    Chakraa
                                </h1>
                                <h1 className="opacity-50 text-xl w-10/12">
                                    Landing page for digital marketing agency
                                </h1>
                            </div>
                            <button className="hidden self-center transition-all group-hover:bg-[#131315] sm:block p-5 rounded-full bg-white">
                                <FiArrowUpRight
                                    className="text-orange-600 group-hover:text-blue-600"
                                    size={50}
                                />
                            </button>
                        </div>
                        <div className="max-w-full max-h-full rounded-2xl overflow-hidden  ">
                            <Image
                                className="min-w-full h-80 object-cover sm:h-auto overflow-hidden transition-all group-hover:scale-105 rounded-2xl"
                                width={5000}
                                height={5000}
                                alt="img"
                                src="/dashboard.png"
                            ></Image>
                            {/* only phone arrow icon */}
                            <button className="flex relative bottom-20 -mb-20 ml-auto z-10 transition-all  sm:hidden p-4 rounded-full bg-white">
                                <FiArrowUpRight
                                    className="text-black group-hover:text-orange-600"
                                    size={50}
                                />
                            </button>
                        </div>
                    </Link>
                </div>
                <div className="flex px-1 pb-3 sm:w-1/2 rounded-2xl bg-[#131315]">
                    <Link
                        className="group flex flex-col px-2"
                        href="https://www.github.com/gdhyani"
                    >
                        <div className="flex items-center flex-row my-10 justify-between">
                            <div className="flex flex-col  ml-6 sm:ml-10">
                                <h1 className="text-3xl font-semibold">
                                    TheDiv
                                </h1>
                                <h1 className="opacity-50 text-xl ">
                                    Complete Blog website with CMS
                                </h1>
                            </div>
                            <button className="hidden self-center transition-all group-hover:bg-[#131315] sm:block p-5 rounded-full bg-white">
                                <FiArrowUpRight
                                    className="text-orange-600 group-hover:text-blue-600"
                                    size={50}
                                />
                            </button>
                        </div>
                        <div className="max-w-full max-h-full rounded-2xl overflow-hidden  ">
                            <Image
                                className="min-w-full scale-105 h-80 object-cover sm:h-auto overflow-hidden transition-all group-hover:scale-110 rounded-2xl"
                                width={5000}
                                height={5000}
                                alt="img"
                                src="/blog.jpg"
                            ></Image>
                            {/* only phone arrow icon */}
                            <button className="flex relative bottom-20 -mb-20 ml-auto z-10 transition-all  sm:hidden p-4 rounded-full bg-white">
                                <FiArrowUpRight
                                    className="text-black group-hover:text-orange-600"
                                    size={50}
                                />
                            </button>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}
