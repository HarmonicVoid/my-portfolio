import '../styles/globals.css'
import {Grommet} from "grommet"
import marvinsGrommetTheme from "../utils/marvinsGrommetTheme"
type TabSection = Readonly<"Home" | "About" | "Projects">;
import HomeTab from '../components/HomeTab';
import AboutTap from '../components/AboutTab';
import ProjectsTab from '../components/ProjectsTab';
import { useState } from 'react';
import {Box, Button} from "grommet";
import {motion} from 'framer-motion'


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


function MyApp({ Component, pageProps }) {

  const [currentTab, setCurrentTab] = useState<TabSection>('Home');

  return (
    <>
        <Grommet theme={marvinsGrommetTheme}>

          <Component {...pageProps} />

          <Box align="center">
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
                <Box gap="large" direction="row" align="center">
                    <Button onClick={() => setCurrentTab('Home')}   hoverIndicator={"#ba000d"} color="#1A237E" size="medium"  label="Home" primary/>
                    <Button onClick={() => setCurrentTab('About')}  hoverIndicator={"#ba000d"} color="#1A237E" size="medium" label="About" primary/>
                    <Button onClick={() => setCurrentTab('Projects')} hoverIndicator={"#ba000d"} color="#1A237E" size="medium" label="Projects" primary/>
                </Box>
            </motion.div>
            {renderSpecificTabElement(currentTab)}
          </Box>
        </Grommet>

    </>
  )
}

export default MyApp

