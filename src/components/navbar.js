"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    FiHome,
    FiBriefcase,
    FiBookmark,
    FiUser,
    FiLink2,
} from "react-icons/fi";
const navlinks = [
    { tab: "home", url: "/" },
    { tab: "work", url: "/work" },
    { tab: "about", url: "/about" },
];
export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className="text-white sticky top-0 z-50 -mb-12 sm:-mb-14 ">
            <div className="h-20 bg-black"></div>
            <div className="mx-4 md:mx-auto relative -top-16  rounded-2xl bg-[#131315] items-center flex justify-between flex-row max-w-7xl py-4 pr-3 sm:p-3 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                <div className="hidden lg:flex">
                    <Link href="/" className="ml-5 font-bold text-4xl">GD</Link>
                </div>
                <div className="hidden lg:flex gap-4">
                    {navlinks.map((el) => (
                        <Link
                            className={`px-4 py-2 font-bold transition-all text-xl rounded-full ${
                                pathname === el.url
                                    ? "opacity-100"
                                    : "opacity-50"
                            }`}
                            href={`${el.url}`}
                            key={navlinks.indexOf(el)}
                        >
                            {el.tab}
                        </Link>
                    ))}
                    {/* <Link
                    className="px-4 py-2 font-bold transition-all text-xl rounded-full"
                    href="/blog"
                >
                    blog
                </Link> */}
                    <Link
                        className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2"
                        href="/contact"
                    >
                        <FiLink2 size={15} />
                        Hire Me
                    </Link>
                </div>
                <div className="flex lg:hidden justify-between w-full items-center">
                    <div className="flex gap-1 pl-1 w-1/2 items-center">
                        
                        <Link
                            className={`px-3 m-auto py-2 font-bold transition-all rounded-full ${pathname==="/"?"opacity:100":"opacity-50"}`}
                            href="/"
                        >
                            <FiHome size={25} />
                        </Link>
                        <Link
                            className={`px-3 m-auto py-2 font-bold transition-all rounded-full ${pathname==="/about"?"opacity:100":"opacity-50"}`}
                            href="/about"
                        >
                            <FiUser size={25} />
                        </Link>
                        <Link
                            className={`px-3 m-auto py-2 font-bold transition-all rounded-full ${pathname==="/work"?"opacity:100":"opacity-50"}`}
                            href="/work"
                        >
                            <FiBriefcase size={25} />
                        </Link>
                        {/* <Link
                        className="px-3 m-auto py-2 font-bold transition-all rounded-full"
                        href="/blog"
                    >
                        <FiBookmark size={25} />
                    </Link> */}
                    </div>
                    <Link
                        className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2"
                        href="/contact"
                    >
                        <FiLink2 size={15} />
                        Hire Me
                    </Link>
                </div>
            </div>
        </div>
    );
}
