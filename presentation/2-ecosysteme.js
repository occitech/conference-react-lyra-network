import React from 'react'
import {Slide, Heading, Text, Appear, CodePane, List, ListItem} from 'spectacle'

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
      <Text textColor='tertiary'>Et donc a besoin d'être complété</Text>
    </Appear>
  </Slide>,
  <Slide key='2-5-2' notes={`La v2-3 est intéressante mais pas très React.`}>
    <Text textColor='secondary' lineHeight={2} textSize='2em'>
      React Router (v4)
    </Text>
    <Text textColor='tertiary'>
      Code Example
    </Text>
    <Appear>
      <Text textColor='tertiary'>
        Mais c'est alpha :/
      </Text>
    </Appear>
  </Slide>,
  <Slide key='2-5-1'>
    <Text textColor='secondary' lineHeight={2} textSize='2em'>
      Redux
    </Text>
    <Text textColor='tertiary'>
      Schema de mise à jour de Redux
    </Text>
    <Appear>
      <Text textColor='tertiary'>
        You might not need Redux
      </Text>
    </Appear>
  </Slide>,
  <Slide key='2-5-3' notes={`Du style par composant`}>
    <Text textColor='secondary' lineHeight={2} textSize='2em'>
      CSS Modules
    </Text>
    <Text textColor='tertiary'>
      Code Example
    </Text>
    <Appear>
      <Text textColor='tertiary'>
        Ou CSS Inline ?
      </Text>
    </Appear>
  </Slide>,
  <Slide key='2-5-4' notes={`Des requêtes par composant`}>
    <Text textColor='secondary' lineHeight={2} textSize='2em'>
      GraphQL / Relay
    </Text>
    <Text textColor='tertiary'>
      Code Example
    </Text>
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
    <Text textColor='tertiary'>
      Code Example
    </Text>
    <Appear>
      <Text textColor='tertiary'>
        Ou Enzyme ?
      </Text>
    </Appear>
  </Slide>,
  <Slide key='2-3-0' notes={`JS Fatigue, Reinventing Best Practices`}>
    <Text textColor='tertiary' lineHeight={2} textSize='2em'>
      Mais partout il y a des alternatives
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
      <Text textColor='tertiary' textAlign='left'>React Router est maître du routing</Text>
    </Appear>
  </Slide>,
  <Slide key='2-4-3'>
    <Text textColor='tertiary' textAlign='left'>La communauté s'entraide beaucoup.</Text>
    <Text textColor='tertiary' textAlign='left'>La mode est aux codemods et migrations facilitées</Text>
  </Slide>
]
