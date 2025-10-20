import About from "@/components/About"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage () {
    return (
        <div>
            <About />
            <Image src="/file.svg" alt="file" height={100} width={100} />
            <svg className="size-6 2xl:bg-amber-950 md:bg-pink-600 lg:bg-amber-200 xl:bg-gray-400 sm:bg-gray-50 bg-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg>
        </div>
    )
} 