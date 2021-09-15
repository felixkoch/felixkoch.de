
import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { Box, Container, Divider, Flex, Heading, HStack, Link as ChakraLink, List, ListIcon, ListItem, SimpleGrid, Text, Wrap, WrapItem } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import { PhoneIcon, EmailIcon, CalendarIcon } from '@chakra-ui/icons'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { Tag } from '@chakra-ui/tag'
import { Icon } from "@chakra-ui/react"
import Link from "next/link"

export default function Page(props: any) {

  const { startPage } = props

  return (
    <div >
      <Head>
        <title>Felix Koch – Freelancer & Founder</title>
        <meta name="description" content="Freelance Full Stack Developer & Freelance Data Analyst" />
        <link rel="icon" href="/web.jpg" />
      </Head>
      <header>
        <Box bgColor="#ffd100" pt={startPage ? 5 : 4}  pb={startPage ? 5 : 4}>
          <Container maxW={1280} >
            <Flex justifyContent="space-between" alignItems="center">
              <Link href="/">
                <Avatar name="Felix Koch" src="/web.jpg" size={startPage ? "lg" : "md"} />
                
              </Link>

              <Wrap spacing={4}>
                <WrapItem>
                  <a href="mailto:felix@tagungshotels.info" style={{ textDecoration: 'none' }}>
                    <Button leftIcon={<EmailIcon />} variant="outline" size="sm" borderColor="gray.800" borderWidth="3px">
                      felix@tagungshotels.info
                    </Button>
                  </a>
                </WrapItem>
                <WrapItem>
                  <a href="tel:004942669999999" style={{ textDecoration: 'none' }}>
                    <Button leftIcon={<PhoneIcon />} variant="outline" size="sm" borderColor="gray.800" borderWidth="3px">
                      +49 4266 999 999 9
                    </Button>
                  </a>
                </WrapItem>
                <WrapItem>
                  <a href="https://meetings.hubspot.com/felix137" style={{ textDecoration: 'none' }}>
                    <Button leftIcon={<CalendarIcon />} variant="outline" size="sm" borderColor="gray.800" borderWidth="3px">
                      Make an appointment
                    </Button>
                  </a>
                </WrapItem>
              </Wrap>
            </Flex>

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

                    <Link href="/imprint">
                      Imprint
                    </Link>
                  </ListItem>
                  <ListItem fontSize="xl">
                    <Link href="/privacy">
                      Privacy Policy
                    </Link>
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