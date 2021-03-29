import React from 'react'
import { Box, Heading,Paragraph, Card, Carousel, CardBody,CardFooter, Image} from "grommet"
import styles from '../styles/myStyles.module.css'

function AboutTab(){

    return(

        <Box  align="center">
            <Box animation="fadeIn" >
                <Card margin={{top: '9vh', left:'3vh', right:'3vh'}}height="parent" width="parent" background="dark-2">
                    <CardBody pad="large"> 
                        <Heading alignSelf="center" margin="none">About Me</Heading>
                    
                        <Paragraph className={styles.indent} size="xlarge">
                        Growing up I have always had the ambition to ameliorate my technological skills and bring true value to a team. 
                        I work towards creating products which bring positive impact and worth. 
                        I pride on my self-motivation, teamwork and entrepreneurial spirit.
                        </Paragraph>           
                    </CardBody>
                </Card>
            </Box>
        </Box>
    )
}

export default AboutTab;

