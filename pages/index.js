import Head from 'next/head';;
import { Web3Button } from '@web3modal/react';
import { useWeb3ModalTheme } from '@web3modal/react'
import styles from "../styles/Home.module.css";


function myApp(props) {
  const { theme, setTheme } = useWeb3ModalTheme();
  
  theme;
  setTheme({
    themeMode: 'dark',
    themeVariables: {
      '--w3m-font-family': 'Roboto, sans-serif',
      '--w3m-accent-fill-color': '#ffffff',
      '--w3m-accent-color':'#ff3300',
      '--w3m-background-color': '#ff3300',
    }

  });

  return (
  <>
    <Head>
      <title>Custom Wallet Connect Button</title>
      <meta name="description" content="wallet-connect-button" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  <main className={styles.main}>
    <div>
      <h1 className={styles.title}>Welcome to Connect Wallet Button</h1>
      <div className={styles.centre}>
        <Web3Button balance='hide' />
      </div>
    </div>
  </main>
  <footer className={styles.footer}>
      <b>Crafted with &#10084; by Sourabh</b>
  </footer>
  
  </>
  
  )
}


export default myApp;
