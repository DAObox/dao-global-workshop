import Image from "next/legacy/image";
import Badge from "./Badge";

interface Props {
    image: string
    daoName: string
    address: string
    active: string
    title: string
    description: string
}

export default function Cards({ image, daoName, address, active, title, description }: Props) {
    return(
        <div className="px-4 py-5 rounded-xl bg-ash sm:px-6">
            <div className="flex space-x-3">
                <div className="flex-shrink-0">
                    <div className="relative w-10 h-10">
                        <Image src={image} alt="image" layout="fill" className="rounded-full" />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col w-full sm:items-center sm:justify-between sm:flex-row">
                        <div>
                            <p className="text-sm font-semibold text-gray-900">{daoName}</p>
                            <p className="max-w-xs text-sm truncate text-gray sm:max-w-full">{address}</p>
                        </div>
                        <div>
                            <Badge active={active == "Executed" ? false : true} />
                        </div>
                    </div>
                <div>
                    <p className="text-sm font-semibold text-gray-900">{title}</p>
                    <p className="text-sm text-gray">{description}</p>
                </div>
            </div>
        </div>
    </div>
    )
}