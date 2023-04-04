import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/legacy/image";

export function RightSide() {
  return (
    <aside className="fixed inset-y-0 right-0 hidden w-[320px] overflow-y-auto border-l border-gray-200 xl:block">
      {/* Second Static component for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[320px] lg:flex-col">
        <div className="flex flex-col px-6 overflow-y-auto bg-white border-r border-gray-200 grow gap-y-5">
          <div className="flex items-center h-16 shrink-0">
            <ConnectButton />
          </div>
          <div className="w-full flex flex-col items-center space-y-2.5">
            <div>
              <div className="relative w-[84px] h-[84px]">
                {/* <Image src={"/tbx.png"} layout="fill" /> */}
              </div>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <h2 className="font-bold text-black text-[24px]">XXXXDAO</h2>
              <h6 className="text-[18px] font-semibold">100K Members</h6>
              <button className="py-1.5 px-3 border-2 border-black rounded-md">
                Join Dao
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
