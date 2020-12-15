import Head from 'next/head';
import {Heading, Box, Button} from "grommet";
import HomeTab from '../components/HomeTab';
import AboutTap from '../components/AboutTab';
import ProjectsTab from '../components/ProjectsTab';
import { useState } from 'react';
type TabSection = Readonly<"Home" | "About" | "Projects">;
import styles from '../styles/myStyles.module.css'
import { colors } from 'grommet/themes/base';




function renderSpecificTabElement(tabType: TabSection): JSX.Element{
  switch (tabType) {
    case 'Home':
      return <HomeTab/>;
    case 'About': 
      return <AboutTap/>;
    case 'Projects': 
      return <ProjectsTab/>
    default:
      new Error('Not a supported Tab Type');
  }
}

//getTodos();  //<--- this is what fetches all the data from air table

export default function Home() {

  const [currentTab, setCurrentTab] = useState<TabSection>('Home');

  return (
    <>
      

      <Head>
        <title >Marvin Bolanos</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>


      <Box  margin={{top: '3vh', left:'1vh', right:'1vh'}} animation="fadeIn" align="center" >
      <Heading margin="none" color="white" className={styles.error}><span>marvinbolanos.dev</span></Heading>
      </Box>


      <Box align="center">   

        <Box gap="large" animation="fadeIn" direction="row">
          <Button onClick={() => setCurrentTab('Home')}  hoverIndicator={true} color="#1A237E" size="medium"  label="Home" primary/>
          <Button onClick={() => setCurrentTab('About')} hoverIndicator={true} color="#1A237E" size="medium" label="About" primary/>
          <Button onClick={() => setCurrentTab('Projects')} hoverIndicator={true} color="#1A237E" size="medium" label="Projects" primary/>
        </Box>

        {renderSpecificTabElement(currentTab)}
      </Box>

    </>
  )
}




  



