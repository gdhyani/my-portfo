import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return (
        <div className="mx-4 md:mx-auto max-w-7xl my-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white border-slate-200 rounded-2xl gap-2 sm:pt-10 pt-4  flex flex-col justify-between   text-center">
            <div className="flex flex-col gap-3 sm:flex-row justify-between sm:px-20 sm:pb-10">
                <div className="flex gap-3 sm:gap-10 flex-col sm:flex-row items-center">
                    <Image
                        className="self-center"
                        src="/work.svg"
                        width={80}
                        height={80}
                        alt="png"
                    ></Image>
                    <h1 className="text-3xl sm:text-5xl font-bold">
                        Wanna work together?
                    </h1>
                </div>

                <Link
                    className="py-4 mx-5 mb-2 sm:w-40 sm:self-center bg-orange-600 text-xl rounded-3xl text-white font-bold"
                    href="/contact"
                >
                    Lets Start
                </Link>
            </div>
            <h1 className="text-center rounded-b-3xl rounded-t-xl bg-slate-200 opacity-50">
                Promise you that I'll reply back within 24 hours.
            </h1>
        </div>
    );
}
