import { useState } from "react";
import Head from "next/head";
import { Headbar } from "./Headbar";
import { MobileSidebar } from "./MobileSidebar";
import { RightSide } from "./RightSide";
import { DesktopSidebar } from "./DesktopSidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>The DAO Box Proposals</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <DesktopSidebar />
        <Headbar setSidebarOpen={setSidebarOpen} />
        {children}
        <RightSide />
      </div>
    </>
  );
};

export default Layout;