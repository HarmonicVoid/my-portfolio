import React from 'react'
import { Box, Avatar,Paragraph} from "grommet"
import {motion} from 'framer-motion'

function HomeTab(){

    return(

      <>

          <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                scale: 1.1,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: .3
                }
              },
            }}>
          <Box margin={{top: '5vh'}} align="center">
            
            <Box align="center"
                  justify="center"
                  direction="row"
                  gap="small"
                  pad="small">
                  <Avatar src="/ava2.jpg" size="200px" />
                </Box>
                <Box margin={{top: '3vh', bottom: '3vh', left: '3vh', right: '3vh'}} animation="zoomOut" pad="small" background="#e6da00">
                  <Paragraph textAlign="center" size="xxlarge" color="#2d3748">
                  <strong>Hello, my name is Marvin and I am a self-taught Software Developer</strong>
                  </Paragraph>
                </Box>
          </Box>
          </motion.div>    

      </>
    )
}

export default HomeTab;
