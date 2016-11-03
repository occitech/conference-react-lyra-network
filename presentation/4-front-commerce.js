import React from 'react'
import {
  Slide,
  Heading,
  Text,
  Appear
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
    <Text textColor='tertiary'>Pourquoi React ?</Text>
  </Slide>,
  <Slide key='4-2'>
    <Text textColor='tertiary'>Pourquoi Falcor ?</Text>
  </Slide>,
  <Slide key='4-2'>
    <Text textColor='tertiary'>Comment mutualiser le code ?</Text>
  </Slide>,
  <Slide key='4-2'>
    <Text textColor='tertiary'>Comment gérer le multi-thème ?</Text>
  </Slide>
]
