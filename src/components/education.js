import { Tabs, Tab } from "@nextui-org/react";
import { TbSchool, TbCertificate } from "react-icons/tb";
import { MdOutlineWorkOutline } from "react-icons/md";
export default function App() {
    return (
        <div className="flex mx-5 sm:w-2/6 sm:m-auto flex-col">
            <Tabs className="flex flex-col" aria-label="Options">
                <Tab className="text-lg" key="photos" title="Education">
                    <div className="bg-transparent flex flex-row gap-4 p-2 items-center rounded-2xl border my-4">
                        <div className="flex opacity-50">
                            <TbSchool size={50} />
                        </div>
                        <div className="flex flex-col w-10/12">
                            <h1 className="text-xl">
                                Bechalors of Technology in Information
                                Technology
                            </h1>
                            <h1 className="opacity-50 text-xl">
                                Northern India Engineering College
                            </h1>
                            <h1 className="opacity-50 text-md">2020-2024</h1>
                        </div>
                    </div>
                    <div className="bg-transparent flex flex-row gap-4 p-2 items-center rounded-2xl border my-4">
                        <div className="flex opacity-50">
                            <TbSchool size={50} />
                        </div>
                        <div className="flex flex-col w-10/12">
                            <h1 className="text-xl">
                                Senior Year (12th)
                            </h1>
                            <h1 className="opacity-50 text-xl">
                                Sant Gyaneshwar Model School
                            </h1>
                            <h1 className="opacity-50 text-md">2020</h1>
                        </div>
                    </div>
                    <div className="bg-transparent flex flex-row gap-4 p-2 items-center rounded-2xl border my-4">
                        <div className="flex opacity-50">
                            <TbSchool size={50} />
                        </div>
                        <div className="flex flex-col w-10/12">
                            <h1 className="text-xl">
                                Junior Year (10th)
                            </h1>
                            <h1 className="opacity-50 text-xl">
                                Jindal Public School
                            </h1>
                            <h1 className="opacity-50 text-md">2018</h1>
                        </div>
                    </div>
                </Tab>
                <Tab className="text-lg" key="music" title="Certi">
                <div className="bg-transparent flex flex-row gap-4 p-2 items-center rounded-2xl border my-4">
                        <div className="flex opacity-50">
                            <TbCertificate size={50} />
                        </div>
                        <div className="flex flex-col w-10/12">
                            <h1 className="text-xl">
                                Complete Web Developer Bootcamp
                            </h1>
                            <h1 className="opacity-50 text-xl">
                                Udemy
                            </h1>
                            <h1 className="opacity-50 text-md">2021</h1>
                        </div>
                    </div>
                    <div className="bg-transparent flex flex-row gap-4 p-2 items-center rounded-2xl border my-4">
                        <div className="flex opacity-50">
                            <TbCertificate size={50} />
                        </div>
                        <div className="flex flex-col w-10/12">
                            <h1 className="text-xl">
                                Advanced JavaScript Bootcamp
                            </h1>
                            <h1 className="opacity-50 text-xl">
                                Udemy
                            </h1>
                            <h1 className="opacity-50 text-md">2021</h1>
                        </div>
                    </div>
                    <div className="bg-transparent flex flex-row gap-4 p-2 items-center rounded-2xl border my-4">
                        <div className="flex opacity-50">
                            <TbCertificate size={50} />
                        </div>
                        <div className="flex flex-col w-10/12">
                            <h1 className="text-xl">
                                Python Bootcamp
                            </h1>
                            <h1 className="opacity-50 text-xl">
                                Udemy
                            </h1>
                            <h1 className="opacity-50 text-md">2021</h1>
                        </div>
                    </div>
                    <div className="bg-transparent flex flex-row gap-4 p-2 items-center rounded-2xl border my-4">
                        <div className="flex opacity-50">
                            <TbCertificate size={50} />
                        </div>
                        <div className="flex flex-col w-10/12">
                            <h1 className="text-xl">
                                Complete React Course
                            </h1>
                            <h1 className="opacity-50 text-xl">
                                Udemy
                            </h1>
                            <h1 className="opacity-50 text-md">2021</h1>
                        </div>
                    </div>
                    
                </Tab>
                <Tab className="text-lg" key="videos" title="Career">
                <div className="bg-transparent flex flex-row gap-4 p-2 items-center rounded-2xl border my-4">
                        <div className="flex opacity-50">
                            <MdOutlineWorkOutline size={50} />
                        </div>
                        <div className="flex flex-col w-10/12">
                            <h1 className="text-xl">
                                Freelancing
                            </h1>
                            <h1 className="opacity-50 text-xl">
                                Remote
                            </h1>
                            <h1 className="opacity-50 text-md">2022-Present</h1>
                        </div>
                    </div>
                    <div className="bg-transparent flex flex-row gap-4 p-2 items-center rounded-2xl border my-4">
                        <div className="flex opacity-50">
                            <MdOutlineWorkOutline size={50} />
                        </div>
                        <div className="flex flex-col w-10/12">
                            <h1 className="text-xl">
                                Web Developer Intern
                            </h1>
                            <h1 className="opacity-50 text-xl">
                                Netcogs
                            </h1>
                            <h1 className="opacity-50 text-md">2021</h1>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}
