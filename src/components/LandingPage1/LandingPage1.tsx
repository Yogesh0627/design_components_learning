import Image from "next/image";
import Container from "./Container";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Home() {
    return (
        <div className="flex flex-col items-center h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">

            <div className="max-w-3xl mx-auto absolute inset-0 h-full w-full">
                <div className="absolute inset-y-0 left-0 h-full  w-px bg-linear-to-b from-black to-neutral-400 pointer-events-none z-0" />
                <div className="absolute inset-y-0 right-0 h-full  w-px bg-linear-to-b from-black to-neutral-400 pointer-events-none z-0" />
            </div>
            <Container className="">
                <Navbar />
                <Hero />
            </Container>

            <div className="relative w-full ">
                <div className="h-px w-full absolute inset-x-0  bg-linear-to-r from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0" />
                <div className="max-w-3xl mx-auto p-2">
                    <Image
                        src={"/hero-ui-v5.webp"}
                        width={1000}
                        height={1000}
                        alt="image1"
                        className="rounded-xl w-full object-cover object-top-left border-neutral-200  shadow-md mask-b-from-0% to-100%"
                    />
                </div>
            </div>
        </div>
    );
}
