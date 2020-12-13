import React, { Component } from 'react'
import { Box, Avatar,Paragraph, Heading} from "grommet"

function HomeTab(){

    return(

      <>
          <Box animation="zoomIn" align="center">
            
                <Box align="center"
                  justify="center"
                  direction="row"
                  gap="small"
                  pad="small">
                  <Avatar src="/avatar.jpg" size="200px" />
                </Box>
            
            <Box animation="fadeIn" pad="small" background="#e6da00">
              <Paragraph textAlign="center" size="xxlarge" color="#2d3748">
              <strong>Hello, my name is Marvin and I am a Software Developer</strong>
              </Paragraph>
            </Box>
          
          </Box>
          
      </>

    )
}

export default HomeTab;

//<Box direction="row"  gap="small" margin={{bottom: 'small', top: 'small'}}>
//<Avatar background="red" size="300px" src="/avatar.jpg" />  
//</Box>    