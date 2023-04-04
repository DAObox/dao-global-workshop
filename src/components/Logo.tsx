import Image from "next/legacy/image";

export default function Logo() {
    return(
        <div className="flex items-center space-x-2">
            <div className="w-[32px] h-[32px] relative">
                <Image src={"/favicon.png"} layout="fill" alt="image" />
            </div>
            <div>
                <h1 className="text-black font-bold text-3xl">BoxDao</h1>
            </div>
        </div>
    )
}
