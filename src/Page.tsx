
import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { Box, Container, Divider, Flex, Heading, HStack, Link, List, ListIcon, ListItem, SimpleGrid, Text, Wrap, WrapItem } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import { PhoneIcon, EmailIcon, CalendarIcon } from '@chakra-ui/icons'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { Tag } from '@chakra-ui/tag'
import { Icon } from "@chakra-ui/react"

export default function Page(props: any) {
  return (
    <div >
      <Head>
        <title>Felix Koch – Freelancer & Founder</title>
        <meta name="description" content="Freelance Full Stack Developer & Freelance Data Analyst" />
        <link rel="icon" href="/web.jpg" />
      </Head>
      <header>
        <Box bgColor="#ffd100" pt={5} pb={5}>
          <Container maxW={1280} >
            <Avatar name="Felix Koch" src="/web.jpg" />
          </Container>
        </Box>
      </header>

      <main style={{ minHeight: "100vh" }}>
        {props.children}
      </main>

      <footer>
        <Box bgColor="#d6d6d6" pt={10} pb={10}>
          <Container maxW={1280} >
            <SimpleGrid columns={2}>
              <Box>
                <List spacing={3}>
                  <ListItem fontSize="xl">

                    <a href='#'>
                      Imprint
                    </a>
                  </ListItem>
                  <ListItem fontSize="xl">
                    Privacy Policy
                  </ListItem>
                </List>
              </Box>
              <Box>
                <List spacing={3}>
                  <ListItem fontSize="xl">

                    <ListIcon as={FaLinkedin} fontSize="2xl" />
                    <a href='#'>
                      LinkedIn
                    </a>
                  </ListItem>
                  <ListItem fontSize="xl">
                    <ListIcon as={FaGithub} fontSize="2xl" />
                    Github
                  </ListItem>
                </List>

              </Box>
            </SimpleGrid>
          </Container>
        </Box>
      </footer>
    </div>
  )
}