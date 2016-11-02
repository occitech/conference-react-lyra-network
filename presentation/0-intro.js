import React from 'react'

import {
  Slide,
  Appear,
  Layout,
  Fill,
  Heading,
  Text,
  Image,
  List,
  ListItem,
  Table,
  TableRow,
  TableItem
} from 'spectacle'

import preloader from 'spectacle/lib/utils/preloader'

const images = {
  react: require('../assets/image/react.png'),
  companies: require('../assets/image/companies.png'),
  lyra_white: require('../assets/image/lyra-white.png'),
  lyra_color: require('../assets/image/lyra-color.jpg'),
  occitech: require('../assets/image/occitech.png'),
}

preloader(images)

export default [
  <Slide key='0-1'>
    <Image src={images.react.replace('/', '')} />
    <Layout>
      <Fill>
        <Image src={images.occitech.replace('/', '')} width={400} margin='130px auto 0 auto' />
      </Fill>
      <Fill>
        <Image src={images.lyra_white.replace('/', '')} width={200} height={200} margin='80px auto 0 auto' />
      </Fill>
    </Layout>
  </Slide>,
  <Slide key='0-2'>
    <Image src={images.react.replace('/', '')} width={200} height={200}/>
    <Heading size={2} lineHeight={1} textFont='secondary'>
      React
    </Heading>
    <Text textFont='secondary' textColor='tertiary' textSize={24} margin='40px auto 0 auto' caps>
      A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
    </Text>
  </Slide>,
  <Slide key='0-3'>
    <Heading size={3} lineHeight={1} textFont='primary' textColor='secondary' caps>
      LIBRARY VS. FRAMEWORK
    </Heading>
  </Slide>,
  <Slide key='0-4'>
    <List textFont='secondary' textColor='tertiary'>
      <ListItem>Declarative</ListItem>
      <ListItem>Component-Based</ListItem>
      <ListItem>Learn Once, Write Anywhere</ListItem>
    </List>
  </Slide>,
  <Slide key='0-5'>
    <Heading size={4} lineHeight={1} textFont='primary' textColor='secondary' caps>
      POWERFUL BUT LIGHTWEIGHT
    </Heading>
    <Layout>
      <Fill>
        <Table textAlign='right' margin='40px 0 0 0'>
          <tbody>
          <TableRow><TableItem><Text padding='0 20px 0 0' textColor='tertiary'>Angular 2</Text></TableItem></TableRow>
          <TableRow><TableItem><Text padding='0 20px 0 0' textColor='tertiary'>Ember</Text></TableItem></TableRow>
          <TableRow><TableItem><Text padding='0 20px 0 0' textColor='tertiary'>Angular 1</Text></TableItem></TableRow>
          <TableRow><TableItem><Text padding='0 20px 0 0' textColor='tertiary'>React + Redux</Text></TableItem></TableRow>
          </tbody>
        </Table>
      </Fill>
      <Fill>
        <Table textAlign='left' margin='40px 0 0 0'>
          <tbody>
          <TableRow><TableItem><Text padding='0 0 0 20px' textColor='quartenary'>764k minified</Text></TableItem></TableRow>
          <TableRow><TableItem><Text padding='0 0 0 20px' textColor='quartenary'>435k</Text></TableItem></TableRow>
          <TableRow><TableItem><Text padding='0 0 0 20px' textColor='quartenary'>143k</Text></TableItem></TableRow>
          <TableRow><TableItem><Text padding='0 0 0 20px' textColor='quartenary'>151k minified</Text></TableItem></TableRow>
          </tbody>
        </Table>
      </Fill>
    </Layout>
  </Slide>,
  <Slide key='0-6'>
    <Heading size={4} lineHeight={1} textFont='primary' textColor='secondary' caps>
      REACT, C&#39;EST DU SERIEUX
    </Heading>
    <Image src={images.companies.replace('/', '')} display='block' margin='40px auto'/>
    <Appear><Image src={images.lyra_color.replace('/', '')} display='block'/></Appear>
  </Slide>,
]
