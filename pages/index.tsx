import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { Box, Container, Divider, Flex, Heading, HStack, Link, List, ListIcon, ListItem, SimpleGrid, Text, Wrap, WrapItem } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import { PhoneIcon, EmailIcon, CalendarIcon } from '@chakra-ui/icons'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { Tag } from '@chakra-ui/tag'
import { Icon } from "@chakra-ui/react"

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Felix Koch – Freelancer & Founder</title>
        <meta name="description" content="Freelance Full Stack Developer & Freelance Data Analyst" />
        <link rel="icon" href="/web.jpg" />
      </Head>
      <header>
        <Box bgColor="#ffd100" p={5}>
          <Container maxW={1280} >
            <Avatar name="Felix Koch" src="/web.jpg" />
          </Container>
        </Box>
      </header>

      <main style={{ minHeight: "100vh" }}>
        <Box bgColor="#ffd100" p={5}>
          <Container maxW={1280}>
            <Heading as="h1" size="4xl">
              Felix Koch
            </Heading>
            <Box borderTop={10} borderColor="gray.800" borderStyle="solid" width="xs" mt={10} mb={10}></Box>
            <Heading as="h2" size="2xl" mb={16}>
              Freelance Full Stack Developer<br />Freelance Data Analyst<br />Founder<br />Father & Beekeeper
            </Heading>

            <Text fontSize='2xl' mb={5}>Please get in touch</Text>

            <Wrap spacing="30px" mb={10}>
              <WrapItem>
                <Button leftIcon={<EmailIcon />} variant="outline" size="lg" borderColor="gray.800" borderWidth="3px">
                  felix@tagungshotels.info
                </Button>
              </WrapItem>
              <WrapItem>
                <Button leftIcon={<PhoneIcon />} variant="outline" size="lg" borderColor="gray.800" borderWidth="3px">
                  +49 4266 999 999 9
                </Button>
              </WrapItem>
              <WrapItem>
                <Button leftIcon={<CalendarIcon />} variant="outline" size="lg" borderColor="gray.800" borderWidth="3px">
                  Make an appointment
                </Button>
              </WrapItem>
            </Wrap>
          </Container>
        </Box>

        <Container maxW={1280}>
          <Box>
            <Box borderTop={10} borderColor="gray.800" borderStyle="solid" width="xs" mt={10} mb={10}></Box>
            <Heading as="h2" size="xl" mb={10}>
              Technologies
            </Heading>
            <Wrap spacing={4} mb={5}>
              {
                ['TypeScript', 'JavaScript', 'PHP', 'PowerBI'].map(t => <Tag size="lg" variant="solid" colorScheme="brand" color="gray.800">{t}</Tag>)
              }
            </Wrap>
            <Wrap spacing={4} mb={10} maxWidth="3xl">
              {
                ['AzureSQL', 'Azure ACI', 'Azure AppService', 'apaleo', 'apaleo-api', 'CSS', 'Docker', 'GraphQL', 'Linux', 'Meltano', 'MySql', 'Next.js', 'Node', 'Node.js', 'Postgres', 'PowerAutomate', 'Python', 'React', 'React.js', 'Singer', 'Singer.io', 'SQL'].map(t => <Tag size="md" variant="solid" colorScheme="brand" color="gray.800">{t}</Tag>)
              }
            </Wrap>
          </Box>

          <Box>
            <Box borderTop={10} borderColor="gray.800" borderStyle="solid" width="xs" mt={10} mb={10}></Box>
            <Heading as="h2" size="xl" mb={10}>
              Experience
            </Heading>
            <Box fontSize="xl">

              <Flex mb={10}>
                <Avatar name="Felix Koch" mr={10} src="/web.jpg" />
                <Box>
                  <Text fontWeight="bold">Freelancer</Text>
                  <Text fontSize="md">Mar. 2021–Today</Text>
                </Box>
              </Flex>
              <Flex mb={10}>
                <Avatar name="tagungshotels.info" mr={10} src="/einzeln.png" />
                <Box>
                  <Text fontWeight="bold" >Founder</Text>
                  <Text>tagungshotels.info</Text>
                  <Text fontSize="md">Sep. 2020–Today</Text>
                </Box>
              </Flex>
              <Flex mb={10}>
                <Avatar mr={10} />
                <Box>
                  <Text fontWeight="bold" >Senior Web Developer</Text>
                  <Text fontSize="md">Jan. 2010–Aug. 2020</Text>
                </Box>
              </Flex>
              <Flex mb={10}>
                <Avatar mr={10} />
                <Box>
                  <Text fontWeight="bold" >Software Developer</Text>
                  <Text fontSize="md">Jan. 2008–Dec. 2009</Text>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box>
            <Box borderTop={10} borderColor="gray.800" borderStyle="solid" width="xs" mt={10} mb={10}></Box>
            <Heading as="h2" size="xl" mb={10}>
              Open Source
            </Heading>
            <Box fontSize="xl" mb={10}>
              <Icon as={FaGithub} fontSize="2xl" mr={2}/> <Link textDecoration="underline" href="https://github.com/felixkoch/tap-apaleo">tap-apaleo</Link> – Singer tap for apaleo
            </Box>
          </Box>

        </Container>


      </main>

      <footer>
        <Box bgColor="#d6d6d6" p={10}>
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

export default Home
