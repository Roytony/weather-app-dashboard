import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/Topbar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col ">
      <Head>
        <title>Whather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 text-center">
        <Sidebar />
        <div className="w-full">
          <TopBar />
          <Main />
        </div>
      </main>
    </div>
  )
}

export default Home
