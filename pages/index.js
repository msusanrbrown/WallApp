import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/navbar"
import Container from "../components/container"
import Card from "../components/card"
import PostComment from "../containers/post-comment"

export default function Home({post}) {

  return (
    <div>
      <Head>
        <title>WALLAPP</title>
        <meta name="description" content="Application that allows users to write on a wall." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Container>
        <PostComment/>
        <Card/>
        <Card/>
        <p>Hello World</p>
      </Container>
      
      
    </div>
  )
}



// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data} }
// }

