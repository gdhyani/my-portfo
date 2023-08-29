import Image from "next/image";
import Link from "next/link";
import WorkSec from "@/components/workSec";

export default function Work() {
    return (
        <main className="flex text-white flex-col max-w-7xl m-auto sm:mt-5">
            <section>
                <WorkSec />
            </section>
        </main>
    );
}
