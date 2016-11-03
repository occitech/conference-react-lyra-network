import React from 'react'
import {
  Slide,
  Heading,
  Text,
  Appear,
  List,
  ListItem
} from 'spectacle'

export default [
  <Slide key='4-0'>
    <Heading textColor='secondary' fit caps>
      Front-Commerce
    </Heading>
    <Appear>
      <Heading textColor='tertiary' caps>
        Demo
      </Heading>
    </Appear>
  </Slide>,
  <Slide key='4-1'>
    <Text textColor='secondary' textSize='2em'>Pourquoi React ?</Text>
    <List>
      <Appear><ListItem textColor='tertiary'>Facilité d'extension</ListItem></Appear>
      <Appear><ListItem textColor='tertiary'>Testabilité</ListItem></Appear>
      <Appear><ListItem textColor='tertiary'>Réutilisabilité</ListItem></Appear>
    </List>
  </Slide>,
  <Slide key='4-2'>
    <Text textColor='secondary' textSize='2em'>Pourquoi Falcor ?</Text>
    <List>
      <Appear><ListItem textColor='tertiary'>Performances</ListItem></Appear>
      <Appear><ListItem textColor='tertiary'>Orienté composant</ListItem></Appear>
      <Appear><ListItem textColor='tertiary'>Multi API</ListItem></Appear>
    </List>
  </Slide>
]
