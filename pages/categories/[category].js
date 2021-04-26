import { useRouter } from 'next/router'
import Head from 'next/head'

import { ChannelList } from '../../components/ChannelList'
import { Header } from '../../components/Header'

export default function CategoryChannels({ channels }) {
  const router = useRouter()
  const { category } = router.query

  return (
    <>
      <Head>
      <title>Slack Marketplace | {category} channels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Channels in {category}</h2>
          </div>
          <ChannelList channels={channels} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/category/${context.params.category}`)
  const { channels } = await res.json()

  return {
    props: { channels },
  }
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/categories`)
  const data = await res.json()
  const paths = data.categories.map((category) => ({ params: { category: category.id }}))

  return {
    paths,
    fallback: false,
  }
}
