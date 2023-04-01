import * as React from "react";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import { WagmiConfig } from "wagmi";

import { chains, client } from "../wagmi";
import { AragonProvider } from "@daobox/use-aragon";

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider
        coolMode
        showRecentTransactions={true}
        chains={chains}
        appInfo={{
          appName: "Rainbowkit Demo",
          learnMoreUrl: "https://daobox.app",
        }}
      >
        <AragonProvider>
          <NextHead>
            <title>DAO Box Workshop</title>
          </NextHead>

          {mounted && <Component {...pageProps} />}
        </AragonProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
