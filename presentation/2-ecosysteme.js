import React from 'react'
import {Slide, Heading, Text, Appear, CodePane, List, ListItem, Link, Image} from 'spectacle'

import preloader from 'spectacle/lib/utils/preloader'

const reduxCartoonImage = 'https://cdn-images-1.medium.com/max/800/1*Je2mow8mjYLngXreGGlIEg.png'

const images = {
  redux: reduxCartoonImage
}

preloader(images)
export default [
  <Slide key='2-0'>
    <Heading textColor='secondary' fit caps>
      L'écosystème
    </Heading>
  </Slide>,
  <Slide key='2-1' notes={`ex: Pas pertinent de comparer à Angular.`}>
    <Text textColor='tertiary' lineHeight={2}>
      React ce n'est qu'une librairie
    </Text>
    <Appear>
      <Text textColor='tertiary'>Et donc a besoin d'être complétée</Text>
    </Appear>
  </Slide>,
  <Slide key='2-5-2' notes={`La v2-3 est intéressante mais pas très React.`}>
    <Text textColor='secondary' textSize='2em'>
      React Router (v4)
    </Text>
    <CodePane
      lang='jsx'
      source={require('raw!../assets/ecosysteme/router.example')}
      textSize='0.8em'
    />
    <Appear>
      <Text textColor='tertiary'>
        Mais la v4 casse tout
      </Text>
    </Appear>
  </Slide>,
  <Slide key='2-5-1'>
    <Text textColor='secondary' textSize='2em'>
      Redux
    </Text>
    <Image
      display='block'
      src={images.redux}
      margin='1em auto 0'
    />
    <Link textSize='0.8em' textColor='secondary' href='https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6' title='A cartoon intro to Redux'>image by Lin Clark</Link>
    <Appear>
      <Text textColor='tertiary'>
        <br />You Might Not Need Redux
      </Text>
    </Appear>
  </Slide>,
  <Slide key='2-5-3' notes={`Du style par composant`}>
    <Text textColor='secondary' textSize='2em'>
      CSS Modules
    </Text>
    <CodePane
      lang='jsx'
      source={require('raw!../assets/ecosysteme/css-modules.example')}
      textSize='0.8em'
    />
    <Appear>
      <Text textColor='tertiary'>
        Ou CSS Inline ?
      </Text>
    </Appear>
  </Slide>,
  <Slide key='2-5-4' notes={`Des requêtes par composant`}>
    <Text textColor='secondary' textSize='2em'>
      GraphQL / Relay
    </Text>
    <CodePane
      lang='jsx'
      source={require('raw!../assets/ecosysteme/graphql.example')}
      textSize='0.8em'
    />
    <Appear>
      <Text textColor='tertiary'>
        Ou Falcor ?
      </Text>
    </Appear>
  </Slide>,
  <Slide key='2-5-5' notes={`Tester ses composants`}>
    <Text textColor='secondary' lineHeight={2} textSize='2em'>
      Jest / Snapshot Testing
    </Text>
    <CodePane
      lang='jsx'
      source={require('raw!../assets/ecosysteme/jest.example')}
      textSize='0.8em'
    />
    <Appear>
      <Text textColor='tertiary'>
        Ou Enzyme ?
      </Text>
    </Appear>
  </Slide>,
  <Slide key='2-3-0' notes={`JS Fatigue, Reinventing Best Practices`}>
    <Text textColor='tertiary' lineHeight={2} textSize='2em'>
      Partout il y a des alternatives
    </Text>
  </Slide>,
  <Slide key='2-3-1'>
    <Text textColor='tertiary' textAlign='left'>Il faut choisir soi-même sa solution</Text>
    <Appear>
      <Text textColor='tertiary' textAlign='left'>Parfois (souvent ?) les libs changent radicalement</Text>
    </Appear>
    <Appear>
      <Text textColor='tertiary' textAlign='left'>Il n'y a pas de ligne directrice unifiée</Text>
    </Appear>
    <Appear>
      <Text textColor='tertiary' textAlign='left'>Personne ne sait si on va dans la bonne direction</Text>
    </Appear>
  </Slide>,
  <Slide key='2-4-0' notes={`Généralement ce sont des petites libs, qu'on va composer en fonction des besoins et de l'évolution du projet`}>
    <Text textColor='tertiary' textSize='2em' lineHeight={2}>
      Mais tout n'est pas si noir
    </Text>
  </Slide>,
  <Slide key='2-4-1'>
    <Text textColor='tertiary' textAlign='left'>Il n'est pas coûteux d'implémenter sa propre solution</Text>
    <Appear>
      <Text textColor='tertiary' textAlign='left'>Redux, c'est 100 lignes de code</Text>
    </Appear>
  </Slide>,
  <Slide key='2-4-2'>
    <Text textColor='tertiary' textAlign='left'>Certaines solutions rassemblent les foules</Text>
    <Appear>
      <Text textColor='tertiary' textAlign='left'>React Router, Redux, React Motion</Text>
    </Appear>
  </Slide>,
  <Slide key='2-4-3'>
    <Text textColor='tertiary' textAlign='left'>La communauté s'entraide beaucoup.</Text>
    <Appear>
      <Text textColor='tertiary' textAlign='left'>La mode est aux codemods et migrations facilitées</Text>
    </Appear>
  </Slide>
]
