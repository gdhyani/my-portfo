"use client";
import { useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import Image from "next/image";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mess, setMess] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        console.log({ name, email, mess });
    }
    return (
        <main className="flex flex-col min-h-screen max-w-7xl m-auto mt-5">
            <section className="mx-4 md:mx-0 flex flex-col">
                <div className="text-center bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-2xl py-14">
                    <Image
                        className="m-auto"
                        width="100"
                        height="100"
                        src="/faq.svg"
                        alt="png"
                    />
                    <h1 className="opacity-50">CONTACT</h1>
                    <h1 className="mb-5 mt-2 text-5xl font-bold">
                        Get In Touch
                    </h1>
                    <form className="sm:w-2/5 flex flex-col sm:m-auto mx-5 gap-2">
                        <div className="flex flex-row gap-4 font-bold">
                            <Input
                                value={name}
                                onChange={(evt) => {
                                    setName(evt.target.value);
                                }}
                                className="font-bold"
                                type="name"
                                label="Name"
                            />
                            <Input
                                value={email}
                                onChange={(evt) => {
                                    setEmail(evt.target.value);
                                }}
                                type="email"
                                label="Email"
                            />
                        </div>
                        <div>
                            <Textarea
                                value={mess}
                                onChange={(evt) => {
                                    setMess(evt.target.value);
                                }}
                                className="font-bold"
                                minRows={7}
                                type="text"
                                placeholder="Message"
                            ></Textarea>
                        </div>
                        <button
                            onClick={() => {
                                handleSubmit(event);
                            }}
                            className=" bg-black rounded-xl text-white py-3 px-10"
                        >
                            Get Started
                        </button>
                    </form>
                </div>
            </section>

            <section className=" mx-4 md:mx-0 mt-5 py-5">
                <div className="flex flex-col px-3 gap-5 py-3 sm:flex-row items-center bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-2xl">
                    <div className="flex flex-col px-5 md:rounded-2xl border-b-1 md:text-center sm:w-1/4 py-5 md:border w-full ">
                        <h1 className="opacity-50 text-lg">Email </h1>
                        <h1 className="font-semibold text-xl">gauravdhyani02@gmail.com</h1>
                    </div>
                    <div className="flex flex-col px-5 md:rounded-2xl border-b-1 sm:w-1/4 py-5 md:text-center md:border w-full ">
                        <h1 className="opacity-50 text-lg">Phone</h1>
                        <h1 className="font-semibold text-xl">+91-7428944346</h1>
                    </div>
                    <div className="flex flex-col px-5 md:rounded-2xl sm:w-2/4 py-2 md:text-center md:border w-full ">
                        <h1 className="opacity-50 text-lg">Address </h1>
                        <h1 className="font-semibold text-xl">
                            RZ G-37 Sitapuri, Part-2<br></br> Delhi, India(IN) -
                            110045
                        </h1>
                    </div>
                </div>
            </section>
        </main>
    );
}
