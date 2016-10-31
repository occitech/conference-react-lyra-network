import React from 'react'
import {Slide, Heading, Text, Appear, CodePane, List, ListItem} from 'spectacle'

export default [
  <Slide key='1-0'>
    <Heading fit caps>
      Point technique
    </Heading>
  </Slide>,
  <Slide key='1-1-0'>
    <Text>
      Qu'est ce qui fait la particularité de React ?
    </Text>
  </Slide>,
  <Slide key='1-1-1-0'>
    <Text textSize='2em'>
      Approche déclarative
    </Text>
  </Slide>,
  <Slide key='1-1-1-1'>
    <Text>
      On n'explique pas au navigateur <strong>comment</strong> afficher
    </Text>
    <Appear>
      <Text>
        On explique au navigateur <strong>quoi</strong> afficher
      </Text>
    </Appear>
  </Slide>,
  <Slide key='1-1-1-2'>
    <Text>
      C'est comme du HTML
    </Text>
    <Appear>
      <CodePane
        lang='html'
        source={require('raw!../assets/technique/html.example')}
        margin='2em auto'
        textSize='0.8em'
      />
    </Appear>
  </Slide>,
  <Slide key='1-1-1-4'>
    <Text textAlign='left'>Une balise, c'est :</Text>
    <List>
      <ListItem>Des propriétés (attributs et fils)</ListItem>
      <ListItem>Un état (actif ou non)</ListItem>
    </List>
  </Slide>,
  <Slide key='1-1-1-3'>
    <Text>
      Donc on peut la définir nous même
    </Text>
    <Appear>
      <CodePane
        lang='html'
        source={require('raw!../assets/technique/form.example')}
        margin='2em auto'
        textSize='0.8em'
      />
    </Appear>
  </Slide>,
  <Slide key='1-1-1-4'>
    <Text lineHeight='2'>Résultat : On se moque des détails d'implémentations</Text>
    <Appear>
      <Text textSize='1em'>C'est d'ailleurs pour ça qu'on fait du mobile</Text>
    </Appear>
    <Appear>
      <Text textSize='1em'>C'est d'ailleurs pour ça qu'on fait du natif</Text>
    </Appear>
    <Appear>
      <Text textSize='1em'>C'est d'ailleurs pour ça qu'on fait de la VR</Text>
    </Appear>
    <Appear>
      <Text textSize='1em'>C'est d'ailleurs pour ça qu'on fait de la console</Text>
    </Appear>
  </Slide>,
  <Slide key='1-1-1-9'>
    <Text>Et en plus, c'est maintenable</Text>
  </Slide>,
  <Slide key='1-1-1-10'>
    <Text>Schema Impératif</Text>
  </Slide>,
  <Slide key='1-1-1-11'>
    <Text>Schema Déclaratif</Text>
  </Slide>,
  <Slide key='1-1-2-0'>
    <Text textSize='2em'>
      Approche par composant
    </Text>
    <Appear>
      <Text lineHeight={2}>
        React ce n'est <strong>pas</strong> le V de MVC
      </Text>
    </Appear>
  </Slide>,
  <Slide key='1-1-2-1'>
    <Text>Schema Application</Text>
  </Slide>,
  <Slide key='1.1.2.2'>
    <Text>
      On n'a plus <strong>une</strong> application
    </Text>
    <Appear>
      <Text>
        On a <strong>plusieurs</strong> petites applications
      </Text>
    </Appear>
  </Slide>,
]
