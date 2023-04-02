import { useFetchDao, useFetchProposals } from "@daobox/use-aragon";
import Cards from "./Cards";
import { daoAddress } from "../constants"

export default function Main() {
    const fetched = [
        {
            image: "/avatar.png",
            daoName: "XXXDAO",
            address: "0x5C04F69c9603A808BF4157Ef959F1Ed1e16c0F73",
            active: true,
            title: "Funding proposal",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore et sed? Blanditiis, beatae ut earum ea eveniet natus qui cupiditate provident in atque, corporis fuga necessitatibus, eum dolor totam."
        },
        {
            image: "/avatar.png",
            daoName: "XXXDAO",
            address: "0x5C04F69c9603A808BF4157Ef959F1Ed1e16c0F73",
            active: false,
            title: "Funding proposal",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore et sed? Blanditiis, beatae ut earum ea eveniet natus qui cupiditate provident in atque, corporis fuga necessitatibus, eum dolor totam."
        },
        {
            image: "/avatar.png",
            daoName: "XXXDAO",
            address: "0x5C04F69c9603A808BF4157Ef959F1Ed1e16c0F73",
            active: true,
            title: "Funding proposal",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore et sed? Blanditiis, beatae ut earum ea eveniet natus qui cupiditate provident in atque, corporis fuga necessitatibus, eum dolor totam."
        },
        {
            image: "/avatar.png",
            daoName: "XXXDAO",
            address: "0x5C04F69c9603A808BF4157Ef959F1Ed1e16c0F73",
            active: false,
            title: "Funding proposal",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore et sed? Blanditiis, beatae ut earum ea eveniet natus qui cupiditate provident in atque, corporis fuga necessitatibus, eum dolor totam."
        },
        {
            image: "/avatar.png",
            daoName: "XXXDAO",
            address: "0x5C04F69c9603A808BF4157Ef959F1Ed1e16c0F73",
            active: true,
            title: "Funding proposal",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore et sed? Blanditiis, beatae ut earum ea eveniet natus qui cupiditate provident in atque, corporis fuga necessitatibus, eum dolor totam."
        },
    ]
    const { data: daoData, isLoading: daoIsLoading, isError: daoError } = useFetchDao({
        daoAddressOrEns: daoAddress
    })
    const { data, isLoading, isError } = useFetchProposals({
        daoAddressOrEns: daoAddress
    })
    console.log(data)
    console.log(daoData)
    return(
        <main className="lg:pl-72">
          <div className="xl:pr-80">
            <div className="w-full px-4 py-10 space-y-5 sm:px-6 lg:px-8 lg:py-6">
                <div className="flex items-center justify-between w-full">
                    <h2 className='font-bold text-black text-[40px]'>{daoData?.metadata.name} Proposals</h2>
                    <button
                        type="button"
                        className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
                    >
                        New Proposal
                    </button>
                </div>
                <div className="space-y-2.5">
                    {
                        data?.map(item => <Cards image={daoData?.metadata.avatar || "/avatar.png"} daoName={daoData?.metadata.name || ""} address={daoData?.address || ""} 
                            active={item?.status} title={item.metadata.title} description={item.metadata.summary} />)
                    }
                </div>
            </div>
          </div>
        </main>
    )
}