import Head from 'next/head'
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import MainPage from '@/components/MainPage/MainPage'
import AboutPage from '@/components/AboutPage/AboutPage'
import StatisticsPage from '@/components/StatisticsPage/StatisticsPage'
import ShowPage from '@/components/ShowPage/ShowPage'
import PersonPage from '@/components/PersonPage/PersonPage'
import Footer from '@/components/Footer/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>KM20 H2O</title>
        <meta name="description" content="KM20" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar />
        <MainPage />
        <AboutPage />
        <StatisticsPage />
        <ShowPage />
        <PersonPage />
        {/* <Footer /> */}
      </main>
    </>
  )
}
