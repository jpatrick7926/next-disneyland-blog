import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav.jsx'
import HomeHeroes from '../components/homepage/HomeHeroes.jsx'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Disneyland Deez Nutz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Nav />
      </header>
      <main>
        <section className={styles.heroSection}>
          <HomeHeroes />
        </section>
        <section>

        </section>
      </main>

    </div>
  )
}
