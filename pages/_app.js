import '@/styles/globals.css';
import { EthereumClient, w3mProvider, w3mConnectors } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig  } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains';
import { useEffect } from 'react';
require("dotenv").config({ path: ".env" });


const chains = [mainnet,sepolia];
const projectId = process.env.PROJECTID;

const { provider } = configureChains(chains, [w3mProvider({projectId})]);

const wagmiClient = createClient({
  autoConnect:true,
  connectors: w3mConnectors({ projectId,appName:"Spiderverse", version:2, chains}),
  provider
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

function App({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default App;