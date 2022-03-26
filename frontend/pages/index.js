import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>

        <title>Cloud Native App</title>

        <meta name="description" content="Example of DevOps App"  />

        <link rel="icon" href="/favicon.ico"  />
      </Head>
      <main>
        <p />
        <p />
        <p />
        
        <h1>Bem Vindo!  DevOps-MJS! Acesse:  

          <a href="https://github.com/marcianojsouza/devops-mjs.git">Marciano.Git!</a>
        </h1>
      </main>
    </div>
  );
}
