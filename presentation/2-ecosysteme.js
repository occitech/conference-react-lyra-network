import React from 'react'
import {Slide, Heading, Text, Appear, CodePane, List, ListItem} from 'spectacle'

export default [
  <Slide key='2-0'>
    <Heading fit caps>
      L'écosystème
    </Heading>
  </Slide>,
  <Slide key='2-1' notes={`ex: Pas pertinent de comparer à Angular.`}>
    <Text lineHeight={2}>
      React ce n'est qu'une librairie
    </Text>
    <Appear>
      <Text>Et donc a besoin d'être complété</Text>
    </Appear>
  </Slide>,
  <Slide key='2-5-2' notes={`La v2-3 est intéressante mais pas très React.`}>
    <Text lineHeight={2} textSize='2em'>
      React Router (v4)
    </Text>
    <Text>
      Code Example
    </Text>
    <Appear>
      <Text>
        Mais c'est alpha :/
      </Text>
    </Appear>
  </Slide>,
  <Slide key='2-5-1'>
    <Text lineHeight={2} textSize='2em'>
      Redux
    </Text>
    <Text>
      Schema de mise à jour de Redux
    </Text>
    <Appear>
      <Text>
        You might not need Redux
      </Text>
    </Appear>
  </Slide>,
  <Slide key='2-5-3' notes={`Du style par composant`}>
    <Text lineHeight={2} textSize='2em'>
      CSS Modules
    </Text>
    <Text>
      Code Example
    </Text>
    <Appear>
      <Text>
        Ou CSS Inline ?
      </Text>
    </Appear>
  </Slide>,
  <Slide key='2-5-4' notes={`Des requêtes par composant`}>
    <Text lineHeight={2} textSize='2em'>
      GraphQL / Relay
    </Text>
    <Text>
      Code Example
    </Text>
    <Appear>
      <Text>
        Ou Falcor ?
      </Text>
    </Appear>
  </Slide>,
  <Slide key='2-5-5' notes={`Tester ses composants`}>
    <Text lineHeight={2} textSize='2em'>
      Jest / Snapshot Testing
    </Text>
    <Text>
      Code Example
    </Text>
    <Appear>
      <Text>
        Ou Enzyme ?
      </Text>
    </Appear>
  </Slide>,
  <Slide key='2-3-0' notes={`JS Fatigue, Reinventing Best Practices`}>
    <Text lineHeight={2} textSize='2em'>
      Mais partout il y a des alternatives
    </Text>
  </Slide>,
  <Slide key='2-3-1'>
    <Text textAlign='left'>Il faut choisir soi-même sa solution</Text>
    <Appear>
      <Text textAlign='left'>Parfois (souvent ?) les libs changent radicalement</Text>
    </Appear>
    <Appear>
      <Text textAlign='left'>Il n'y a pas de ligne directrice unifiée</Text>
    </Appear>
    <Appear>
      <Text textAlign='left'>Personne ne sait si on va dans la bonne direction</Text>
    </Appear>
  </Slide>,
  <Slide key='2-4-0' notes={`Généralement ce sont des petites libs, qu'on va composer en fonction des besoins et de l'évolution du projet`}>
    <Text textSize='2em' lineHeight={2}>
      Mais tout n'est pas si noir
    </Text>
  </Slide>,
  <Slide key='2-4-1'>
    <Text textAlign='left'>Il n'est pas coûteux d'implémenter sa propre solution</Text>
    <Appear>
      <Text textAlign='left'>Redux, c'est 100 lignes de code</Text>
    </Appear>
  </Slide>,
  <Slide key='2-4-2'>
    <Text textAlign='left'>Certaines solutions rassemblent les foules</Text>
    <Appear>
      <Text textAlign='left'>React Router est maître du routing</Text>
    </Appear>
  </Slide>,
  <Slide key='2-4-3'>
    <Text textAlign='left'>La communauté s'entraide beaucoup.</Text>
    <Text textAlign='left'>La mode est aux codemods et migrations facilitées</Text>
  </Slide>
]
