import {
    TbBrandHtml5,
    TbBrandCss3,
    TbBrandJavascript,
    TbBrandBootstrap,
    TbBrandPython,
    TbBrandReact,
    TbBrandNextjs,
    TbBrandMongodb,
    TbSql,
    TbBrandFigma,
    TbBrandTailwind,
    TbNetwork,
    TbDatabase,
} from "react-icons/tb";
import { DiNodejsSmall, DiLinux } from "react-icons/di";
import { SiMui, SiSystem76, SiCodeforces, SiPandas } from "react-icons/si";
import { FiCloud } from "react-icons/fi";
import Image from "next/image";
export default function TechSkill(){
    return(
        <section className= "mx-4 md:mx-0 bg-[#131315] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-3xl  py-10 flex flex-col">
                <div className="flex flex-col sm:mb-16 w-full text-center mb-5">
                    <Image
                        className="m-auto"
                        src="/tools.svg"
                        width={100}
                        height={100}
                        alt="png"
                    ></Image>
                    <h1 className="opacity-50 text-xl mb-5">Tools Section</h1>
                    <h1 className="text-4xl sm:text-6xl font-bold">
                        Technical Skills
                    </h1>
                </div>
                <div className="flex flex-col rounded-3xl mx-4 sm:m-auto sm:w-5/6 border text-center">
                    <div className="rounded-t-3xl bg-orange-600 text-center w-full">
                        <h1 className="text-white p-2 sm:p-0">
                            Here are the Languages and Software I use
                        </h1>
                    </div>
                    <div className="flex items-center flex-wrap gap-3 px-3 py-5 sm:p-5">
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <TbBrandHtml5 size={25} />
                            HTML
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <TbBrandCss3 size={25} />
                            CSS
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <TbBrandJavascript size={25} />
                            JavaScript
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <TbBrandBootstrap size={25} />
                            Bootstrap
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <SiMui size={20} />
                            MUi
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <TbBrandPython size={25} />
                            Python
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <SiPandas size={25} />
                            Pandas
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <FiCloud size={25} />
                            Cloud
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <DiNodejsSmall size={25} />
                            Node Js
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <TbBrandReact size={25} />
                            React Js
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <TbBrandHtml5 size={25} />
                            Express
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <TbBrandNextjs size={25} />
                            Next Js
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <TbBrandMongodb size={25} />
                            MongoDb
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <TbBrandFigma size={25} />
                            Figma
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <TbBrandTailwind size={25} />
                            Tailwind CSS
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <TbSql size={25} />
                            SQL
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <TbNetwork size={25} />
                            Network
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <DiLinux size={25} />
                            Linux
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <TbDatabase size={25} />
                            DataBase Management System
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <SiSystem76 size={25} />
                            Operating System
                        </h1>
                        <h1 className="bg-[#131315] text-white flex items-center text-lg px-3 py-1 rounded-3xl border-orange-600 border-2 gap-2 opacity-70">
                            <SiCodeforces size={25} />
                            DataStructures and Algorithm
                        </h1>
                    </div>
                </div>
            </section>
    )
}