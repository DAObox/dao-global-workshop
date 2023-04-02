import Cards from "./Cards";

export default function Main() {
    const data = [
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
    return(
        <main className="lg:pl-72">
          <div className="xl:pr-80">
            <div className="w-full px-4 py-10 space-y-5 sm:px-6 lg:px-8 lg:py-6">
                <div className="flex items-center justify-between w-full">
                    <h2 className='font-bold text-black text-[40px]'>XXXXDAO Proposals</h2>
                    <button
                        type="button"
                        className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        New Proposal
                    </button>
                </div>
                <div className="space-y-2.5">
                    {
                        data.map(item => <Cards image={item.image} daoName={item.daoName} address={item.address} 
                            active={item.active} title={item.title} description={item.description} />)
                    }
                </div>
            </div>
          </div>
        </main>
    )
}