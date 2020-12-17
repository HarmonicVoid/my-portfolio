import Head from 'next/head';
import {Heading, Box} from "grommet";
import styles from '../styles/myStyles.module.css'
import {motion} from 'framer-motion'

export default function Home() {

  return (
    <>
      <Head>
        <title >Marvin Bolanos</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        },
      }}>
        <Box  margin={{top: '3vh', left:'1vh', right:'1vh'}} align="center" >
          <Heading margin="none" color="white" className={styles.error}><span>marvinbolanos.dev</span></Heading>
        </Box>
      </motion.div>
    </>
  )
}