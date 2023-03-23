import Head from 'next/head'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Bike Pharmacy</title>
        <meta name="description" content="Tienda de bicicletas Costa Rica" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Bike Pharmacy</h1>
    </>
  )
}
