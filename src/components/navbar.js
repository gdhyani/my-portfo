import Link from "next/link";
import {
    FiHome,
    FiBriefcase,
    FiBookmark,
    FiUser,
    FiLink2,
} from "react-icons/fi";
export default function Navbar() {
    return (
        <div className="m-auto rounded-2xl bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] items-center flex justify-between flex-row max-w-7xl py-4 pr-3 sm:p-3">
            <div className="hidden lg:flex">
                <h1 className=" font-bold text-4xl">GD</h1>
            </div>
            <div className="hidden lg:flex gap-4">
                <Link
                    className="px-4 py-2 font-bold transition-all text-xl rounded-full"
                    href="/"
                >
                    home
                </Link>
                <Link
                    className="px-4 py-2 font-bold transition-all text-xl rounded-full"
                    href="/about"
                >
                    about me
                </Link>
                <Link
                    className="px-4 py-2 font-bold transition-all text-xl rounded-full"
                    href="/work"
                >
                    works
                </Link>
                <Link
                    className="px-4 py-2 font-bold transition-all text-xl rounded-full"
                    href="/blog"
                >
                    blog
                </Link>
                <Link
                    className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2"
                    href="/contact"
                >
                    <FiLink2 size={15} />
                    Hire Me
                </Link>
            </div>
            <div className="flex lg:hidden justify-between w-full items-center">
                <div className="flex gap-1 pl-1 w-1/2 items-center">
                    <Link
                        className="px-3 m-auto py-2 font-bold  hover:bg-slate-100 transition-all rounded-full"
                        href="/"
                    >
                        <FiHome size={25} />
                    </Link>
                    <Link
                        className="px-3 m-auto py-2 font-bold  hover:bg-slate-100 transition-all rounded-full"
                        href="/about"
                    >
                        <FiUser size={25} />
                    </Link>
                    <Link
                        className="px-3 m-auto py-2 font-bold  hover:bg-slate-100 transition-all rounded-full"
                        href="/work"
                    >
                        <FiBriefcase size={25} />
                    </Link>
                    <Link
                        className="px-3 m-auto py-2 font-bold  hover:bg-slate-100 transition-all rounded-full"
                        href="/blog"
                    >
                        <FiBookmark size={25} />
                    </Link>
                </div>
                <Link
                    className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2"
                    href="/contact"
                >
                    <FiLink2 size={15} />
                    Hire Me
                </Link>
            </div>
        </div>
    );
}
