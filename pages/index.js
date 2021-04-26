import Head from 'next/head'

import { Categories } from '../components/Categories'
import { Header } from '../components/Header'

export default function Home({ categories }) {
  return (
    <>
      <Head>
        <title>Slack Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Categories</h2>
          </div>
          <Categories categories={categories} />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/categories`)
  const { categories } = await res.json()

  return {
    props: { categories },
  }
}
