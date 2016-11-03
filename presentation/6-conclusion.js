import React from 'react'

import {
  Slide,
  Layout,
  Fill,
  Heading,
  Text,
  Image,
  Table,
  TableRow,
  TableItem
} from 'spectacle'

import preloader from 'spectacle/lib/utils/preloader'

const images = {
  twitter: require('../assets/image/twitter.png'),
  github: require('../assets/image/github.png'),
  email: require('../assets/image/email.png')
}

preloader(images)

export default [
  <Slide key='6-1'>
    <Layout>
      <Fill>
        <Heading size={7} lineHeight={1} textFont='secondary' textColor='secondary' caps fill>
          Julien Pradet
        </Heading>
        <Table margin='20px auto 60px auto'>
          <TableRow>
            <TableItem>
              <Image src={images.twitter.replace('/', '')} width={40} margin='0 0 0 65px' />
            </TableItem>
            <TableItem>
              <Text textAlign='left' textColor='tertiary' textSize={26}>
                @JulienPradet
              </Text>
            </TableItem>
          </TableRow>
          <TableRow>
            <TableItem>
              <Image src={images.github.replace('/', '')} width={40} margin='0 0 0 65px' />
            </TableItem>
            <TableItem>
              <Text textAlign='left' textColor='tertiary' textSize={26}>
                https://github.com/JulienPradet
              </Text>
            </TableItem>
          </TableRow>
          <TableRow>
            <TableItem>
              <Image src={images.email.replace('/', '')} width={40} margin='0 0 0 65px' />
            </TableItem>
            <TableItem>
              <Text textAlign='left' textColor='tertiary' textSize={26} margin='0 0 10px 0'>
                julien@occitech.fr
              </Text>
            </TableItem>
          </TableRow>
        </Table>
      </Fill>
      <Fill>
        <Heading size={7} lineHeight={1} textFont='secondary' textColor='secondary' caps fill>
          Alexandre Fournier
        </Heading>
        <Table margin='20px auto 60px auto'>
          <TableRow>
            <TableItem>
              <Image src={images.github.replace('/', '')} width={40} margin='0 0 0 50px' />
            </TableItem>
            <TableItem>
              <Text textAlign='left' textColor='tertiary' textSize={26}>
                https://github.com/alex-fournier
              </Text>
            </TableItem>
          </TableRow>
          <TableRow>
            <TableItem>
              <Image src={images.email.replace('/', '')} width={40} margin='0 0 0 50px' />
            </TableItem>
            <TableItem>
              <Text textAlign='left' textColor='tertiary' textSize={26} margin='0 0 10px 0'>
                alexandre.fournier@lyra-network.com
              </Text>
            </TableItem>
          </TableRow>
        </Table>
      </Fill>
    </Layout>
    <Layout>
      <Fill>
        <Heading size={7} lineHeight={1} textFont='secondary' textColor='secondary' caps fill>
          Matthieu Mitrani
        </Heading>
        <Table margin='20px auto 0 auto'>
          <TableRow>
            <TableItem>
              <Image src={images.email.replace('/', '')} width={40} margin='0 0 0 50px' />
            </TableItem>
            <TableItem>
              <Text textAlign='left' textColor='tertiary' textSize={26} margin='0 0 10px 0'>
                matthieu.mitrani@lyra-network.com
              </Text>
            </TableItem>
          </TableRow>
        </Table>
      </Fill>
      <Fill>
        <Heading size={7} lineHeight={1} textFont='secondary' textColor='secondary' caps fill>
          Thomas Fumey
        </Heading>
        <Table margin='20px auto 0 auto'>
          <TableRow>
            <TableItem>
              <Image src={images.email.replace('/', '')} width={40} margin='0 0 0 65px' />
            </TableItem>
            <TableItem>
              <Text textAlign='left' textColor='tertiary' textSize={26} margin='0 0 10px 0'>
                thomas.fumey@lyra-network.com
              </Text>
            </TableItem>
          </TableRow>
        </Table>
      </Fill>
    </Layout>
  </Slide>
]
