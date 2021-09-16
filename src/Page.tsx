
import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { Box, Container, Divider, Flex, Heading, HStack, Link as ChakraLink, List, ListIcon, ListItem, SimpleGrid, Text, VStack, Wrap, WrapItem } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import { PhoneIcon, EmailIcon, CalendarIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { Tag } from '@chakra-ui/tag'
import { Icon, IconButton, useDisclosure } from "@chakra-ui/react"
import Link from "next/link"
import { Collapse } from "@chakra-ui/transition"

export default function Page(props: any) {

  const { startPage } = props
  const { isOpen, onToggle } = useDisclosure()

  return (
    <div >
      <Head>
        <title>Felix Koch – Freelancer & Founder</title>
        <meta name="description" content="Freelance Full Stack Developer & Freelance Data Analyst" />
        <link rel="icon" href="/web.jpg" />
      </Head>
      <header>
        <Box bgColor="#ffd100" pt={startPage ? 5 : 4} pb={startPage ? 5 : 4}>
          <Container maxW={1280} >
            <Flex justifyContent="space-between" >
              <Flex>
                <Link href="/">
                  <Avatar name="Felix Koch" src="/web.jpg" size={startPage ? "lg" : "sm"} cursor="pointer" />
                </Link>

                <Collapse in={isOpen} animateOpacity >
                  <VStack spacing={4} alignItems="start" ml={10}>

                    <a href="mailto:felix@tagungshotels.info" style={{ textDecoration: 'none' }}>
                      <Button leftIcon={<EmailIcon />} variant="outline" size="sm" borderColor="gray.800" borderWidth="3px">
                        felix@tagungshotels.info
                      </Button>
                    </a>

                    <a href="tel:004942669999999" style={{ textDecoration: 'none' }}>
                      <Button leftIcon={<PhoneIcon />} variant="outline" size="sm" borderColor="gray.800" borderWidth="3px">
                        +49 4266 999 999 9
                      </Button>
                    </a>

                    <a href="https://meetings.hubspot.com/felix137" style={{ textDecoration: 'none' }}>
                      <Button leftIcon={<CalendarIcon />} variant="outline" size="sm" borderColor="gray.800" borderWidth="3px">
                        Make an appointment
                      </Button>
                    </a>

                  </VStack>
                </Collapse>

              </Flex>

              <Wrap spacing={4}>
                <WrapItem display={['none', 'none', 'none', 'block']}>
                  <a href="mailto:felix@tagungshotels.info" style={{ textDecoration: 'none' }}>
                    <Button leftIcon={<EmailIcon />} variant="outline" size="sm" borderColor="gray.800" borderWidth="3px">
                      felix@tagungshotels.info
                    </Button>
                  </a>
                </WrapItem>
                <WrapItem display={['none', 'none', 'none', 'block']}>
                  <a href="tel:004942669999999" style={{ textDecoration: 'none' }}>
                    <Button leftIcon={<PhoneIcon />} variant="outline" size="sm" borderColor="gray.800" borderWidth="3px">
                      +49 4266 999 999 9
                    </Button>
                  </a>
                </WrapItem>
                <WrapItem display={['none', 'none', 'none', 'block']}>
                  <a href="https://meetings.hubspot.com/felix137" style={{ textDecoration: 'none' }}>
                    <Button leftIcon={<CalendarIcon />} variant="outline" size="sm" borderColor="gray.800" borderWidth="3px">
                      Make an appointment
                    </Button>
                  </a>
                </WrapItem>
                <WrapItem display={['block', 'block', 'block', 'none']}>
                  <IconButton onClick={onToggle} aria-label="Menue" icon={<HamburgerIcon />} variant="outline" size="sm" borderColor="gray.800" borderWidth="3px" />
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
            <SimpleGrid columns={[1, 2]}>
              <Box mb={[3, 0]}>
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
                    <a href='https://www.linkedin.com/in/felix-koch-tagungshotels/'>
                      LinkedIn
                    </a>
                  </ListItem>
                  <ListItem fontSize="xl">
                    <ListIcon as={FaGithub} fontSize="2xl" />
                    <a href='https://github.com/felixkoch'>
                      Github
                    </a>
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