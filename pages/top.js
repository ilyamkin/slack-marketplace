import Head from 'next/head'

import { ChannelList } from '../components/ChannelList'
import { Header } from '../components/Header'

export default function TopChannels({ channels }) {
  return (
    <>
      <Head>
        <title>Slack Marketplace | Top Channels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Top Channels</h2>
          </div>
          <ChannelList channels={channels} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/topChannels`)
  const { channels } = await res.json()

  return {
    props: { channels },
  }
}
