import React from 'react'
import { Box, Heading,Paragraph, Card, Carousel, CardBody,CardFooter, Image} from "grommet"

function AboutTab(){

    return(


        <Box margin={{top: '3vh'}} align="center">

            <Box animation="fadeIn">
                <Card height="large" width="large" background="dark-2">

                <CardBody pad="large"> 

                <Heading alignSelf="center" margin="none">About</Heading>

                <Paragraph size="xlarge" textAlign="center" margin="small">
                I got my hands on my first personal computer when I was 10 year old and it opened a whole new experience. 
                It made me realize how much enjoyment technology can bring. 
                Not only did I watch videos on YouTube and learned new things from the web, but would always take the time to ask myself how it all worked. 
                As a kid I would enjoy messing around with settings and was able to understand how the OS functioned. 
                During that time, thinking I was only messing around with settings, I was actually learning how to troubleshoot. 
                My friends and family, knowing my troubleshooting skills, would contact me for help. 
                Ever since then, growing up I have always had the ambition to ameliorate my technological skills and bring true value to a team. 
                I work towards creating products which bring positive impact and worth, regarding a larger cause. 
                I pride myself on my self-motivation, teamwork and entrepreneurial spirit.
                </Paragraph>                    
                   
                </CardBody>

                </Card>
            </Box>

        </Box>


)

}
export default AboutTab;

/*<Box align="center">  

      <Box pad="large">
        
        <Paragraph textAlign="center" size="xxlarge" color="#2d3748">
        <strong>I'm a software developer, who has worked in IT for a few years. Growing up I have always had the ambition to ameliorate my technological skills and bring true value to a team. I work towards creating products which bring positive impact and worth, regarding a larger cause. I pride myself on my self-motivation, teamwork an... see more 

        </strong>
                </Paragraph>


        </Box>
      
</Box>
    )
}
*/
