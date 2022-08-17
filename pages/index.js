import Head from 'next/head'
import Image from 'next/image'
import Article from '../components/Article'
import Books from '../components/Books'
import EmailBanner from '../components/EmailBanner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Search from '../components/Search'
import Selection from '../components/Selection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main id="main" className="pb-32 bg-gray-100 content" role="main">
        <Selection />
        <Search />
        <Article />
        <Books />
        <EmailBanner />
        <Footer />
      </main>
    </div>
  )
}
