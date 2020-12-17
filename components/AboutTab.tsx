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
                        As a kid, I would enjoy messing around with settings and eventually was able to understand how a OS operated. 
                        During that time, thinking I was only messing around with settings, I was actually learning troubleshooting skills. 
                        My friends and family, knowing my skill, would always contact me for help. 
                        </Paragraph>
                        <Paragraph className={styles.indent} size="xlarge">
                        Ever since, growing up I have always had the ambition to ameliorate my technological skills and bring true value to a team. 
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

