import Head from 'next/head'
import {Heading, Box, Button} from "grommet"
import HomeTab from '../components/HomeTab';
import AboutTap from '../components/AboutTab';
import ProjectsTab from '../components/ProjectsTab';
import { useState } from 'react'
import getTodos from '../pages/api/getTodos'

type TabSection = Readonly<"Home" | "About" | "Projects">;



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


      <Box animation="fadeIn" align="center">
        <Heading margin="none" color="white" >marvinbolanos.dev</Heading>
      </Box>

      <Box align="center">   

        <Box gap="large" animation="fadeIn" direction="row">
          <Button onClick={() => setCurrentTab('Home')}  color="#1A237E" size="medium"  label="Home" primary/>
          <Button onClick={() => setCurrentTab('About')} color="#1A237E" size="medium" label="About" primary/>
          <Button onClick={() => setCurrentTab('Projects')} color="#1A237E" size="medium" label="Projects" primary/>
        </Box>

        {renderSpecificTabElement(currentTab)}
      </Box>

    </>
  )
}




  



