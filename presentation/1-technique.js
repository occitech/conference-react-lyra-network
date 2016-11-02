import React from 'react'
import {Slide, Heading, Text, Appear, CodePane, List, ListItem} from 'spectacle'

export default [
  <Slide key='1-0'>
    <Heading fit caps>
      Point technique
    </Heading>
  </Slide>,
  <Slide key='1-1-1-0'>
    <Text textSize='2em'>
      Approche déclarative
    </Text>
  </Slide>,
  <Slide key='1-1-1-1' notes={'C\'est flou donc on va prendre un exemple concret: le html. On donne des règles au programme, et le programme se débrouille'}>
    <Text>
      On n'explique pas au navigateur <strong>comment</strong> afficher
    </Text>
    <Appear>
      <Text>
        On explique au navigateur <strong>quoi</strong> afficher
      </Text>
    </Appear>
  </Slide>,
  <Slide key='1-1-1-2' notes={`Formulaire va gérer le formulaire (inputs, boutons, soumissions, ...).<br /> Label fait l'affichage.<br /> Input quand focus, curseur qui s'affiche.`}>
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
  <Slide key='1-1-1-4' notes={`Pour afficher une balise on a besoin de ça.<br /> Etat facultatif. Dépend de la quantité d'intéraction.`}>
    <Text textAlign='left'>Une balise c'est :</Text>
    <List>
      <ListItem>Des propriétés (attributs et fils)</ListItem>
      <ListItem>Un état (actif ou non)</ListItem>
    </List>
  </Slide>,
  <Slide key='1-1-1-6'>
    <CodePane
      lang='html'
      source={require('raw!../assets/technique/form.example')}
      margin='2em auto'
      textSize='0.8em'
    />
  </Slide>,
  <Slide key='1-1-1-7' notes={`On définit un composant LabelledInput. OSEF de l'implémentation. On veut juste l'utiliser. OSEF de l'implémentation de <<b></b>p>.`}>
    <Text>Résultat 1 : On se moque des détails d'implémentations</Text>
    <Appear>
      <Text textSize='1em'><br />C'est d'ailleurs pour ça qu'on fait du mobile</Text>
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
    <Appear>
      <Text textSize='1em'>Vers l'infini et au delà</Text>
    </Appear>
  </Slide>,
  <Slide key='1-1-1-8' notes={`Affichage déterministe => On a toujours la même chose on se moque de la transition`}>
    <Text lineHeight={2}>Résultat 2 : c'est maintenable</Text>
    <Appear>
      <Text>UI = f(props, state)</Text>
    </Appear>
  </Slide>,
  <Slide key='1-1-1-9' notes={`Une appli à la JQuery`}>
    <Text>Schema Impératif</Text>
  </Slide>,
  <Slide key='1-1-1-11' notes={`Une appli React`}>
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
  <Slide key='1-1-2-2' notes={`On me dit que pour les grosses applis, ce n'est pas maintenable. Mais en fait on réduit la complexité.`}>
    <Text>
      On n'a plus <strong>une</strong> application
    </Text>
    <Appear>
      <Text>
        On a <strong>plusieurs</strong> petites applications
      </Text>
    </Appear>
  </Slide>,
  <Slide key='1-1-3-0'>
    <Text>
      Show me the code
    </Text>
  </Slide>,
  <Slide key='1-1-3-0'>
    <Text>Stateless Components</Text>
    <CodePane
      textAlign='left'
      lang='jsx'
      source={require('raw!../assets/technique/stateless.example')}
      margin='2em auto'
      textSize='0.8em'
    />
  </Slide>,
  <Slide key='1-1-3-0'>
    <Text>Stateful Component</Text>
    <CodePane
      textAlign='left'
      lang='jsx'
      source={require('raw!../assets/technique/stateful.example')}
      margin='2em auto'
      textSize='0.8em'
    />
  </Slide>,
  <Slide key='1-1-3-0' notes={`Procédural => Fonctionnel (Immutabilité, Composition, ...)<br /> React fait découvrir les bonnes pratiques`}>
    <Text lineHeight={2}>
      L'API n'est pas beaucoup plus épaisse
    </Text>
    <Appear>
      <Text>Mais il faut s'approprier le <strong>paradigme</strong></Text>
    </Appear>
  </Slide>,
]
