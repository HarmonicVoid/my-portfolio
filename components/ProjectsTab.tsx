import React from 'react'
import { Box,Paragraph} from "grommet"
import {motion} from 'framer-motion'

function ProjectsTab(){
    return(
      <Box margin={{top: '25vh'}} align="center">
        <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                scale: .8,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: .1
                }
              },
            }}>
            <Box pad="small" background="#e6da00" animation={{ type: 'pulse', duration: 2000 }}>
              <Paragraph textAlign="center" size="xxlarge" color="#2d3748">
              <strong>Coming soon</strong>
              </Paragraph>
            </Box>
        </motion.div>
      </Box>
    )
}


export default ProjectsTab;