import React from 'react'
import {Slide, Heading, Text, Appear, CodePane, List, ListItem} from 'spectacle'

export default [
  <Slide key='1-0'>
    <Heading textColor='secondary' fit caps>
      Point technique
    </Heading>
  </Slide>,
  <Slide key='1-1-1-0'>
    <Text textSize='2em' textColor='tertiary'>
      Approche déclarative
    </Text>
  </Slide>,
  <Slide key='1-1-1-1' notes={'C\'est flou donc on va prendre un exemple concret: le html. On donne des règles au programme, et le programme se débrouille'}>
    <Text textColor='tertiary'>
      On n'explique pas au navigateur <strong>comment</strong> afficher
    </Text>
    <Appear>
      <Text textColor='tertiary'>
        On explique au navigateur <strong>quoi</strong> afficher
      </Text>
    </Appear>
  </Slide>,
  <Slide key='1-1-1-2' notes={`Formulaire va gérer le formulaire (inputs, boutons, soumissions, ...).<br /> Label fait l'affichage.<br /> Input quand focus, curseur qui s'affiche.`}>
    <Text textColor='tertiary'>
      C'est comme du HTML
    </Text>
    <Appear>
      <CodePane
        lang='html'
        source={require('raw!../assets/technique/html.example')}
        margin='2em auto'
        textSize='0.8em'
        bgColor='#3e3e3e'
      />
    </Appear>
  </Slide>,
  <Slide key='1-1-1-4' notes={`Pour afficher une balise on a besoin de ça.<br /> Etat facultatif. Dépend de la quantité d'intéraction.`}>
    <Text textColor='tertiary' textAlign='left'>Une balise c'est :</Text>
    <List textColor='tertiary'>
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
      bgColor='#3e3e3e'
    />
  </Slide>,
  <Slide key='1-1-1-7' notes={`On définit un composant LabelledInput. OSEF de l'implémentation. On veut juste l'utiliser. OSEF de l'implémentation de <<b></b>p>.`}>
    <Text textColor='tertiary'>Résultat 1 : On se moque des détails d'implémentations</Text>
    <Appear>
      <Text textColor='tertiary' textSize='1em'><br />C'est d'ailleurs pour ça qu'on fait du mobile</Text>
    </Appear>
    <Appear>
      <Text textColor='tertiary' textSize='1em'>C'est d'ailleurs pour ça qu'on fait du natif</Text>
    </Appear>
    <Appear>
      <Text textColor='tertiary' textSize='1em'>C'est d'ailleurs pour ça qu'on fait de la VR</Text>
    </Appear>
    <Appear>
      <Text textColor='tertiary' textSize='1em'>C'est d'ailleurs pour ça qu'on fait de la console</Text>
    </Appear>
    <Appear>
      <Text textColor='tertiary' textSize='1em'>Vers l'infini et au delà</Text>
    </Appear>
  </Slide>,
  <Slide key='1-1-1-8' notes={`Affichage déterministe => On a toujours la même chose on se moque de la transition`}>
    <Text textColor='tertiary' lineHeight={2}>Résultat 2 : c'est maintenable</Text>
    <Appear>
      <Text textColor='quartenary'>UI = f(props, state)</Text>
    </Appear>
  </Slide>,
  <Slide key='1-1-1-9' notes={`Une appli à la JQuery`}>
    <Text textColor='tertiary'>Schema Impératif</Text>
  </Slide>,
  <Slide key='1-1-1-11' notes={`Une appli React`}>
    <Text textColor='tertiary'>Schema Déclaratif</Text>
  </Slide>,
  <Slide key='1-1-2-0'>
    <Text textColor='tertiary' textSize='2em'>
      Approche par composant
    </Text>
    <Appear>
      <Text textColor='tertiary' lineHeight={2}>
        React ce n'est <strong>pas</strong> le V de MVC
      </Text>
    </Appear>
  </Slide>,
  <Slide key='1-1-2-1'>
    <Text textColor='tertiary'>Schema Application</Text>
  </Slide>,
  <Slide key='1-1-2-2' notes={`On me dit que pour les grosses applis, ce n'est pas maintenable. Mais en fait on réduit la complexité.`}>
    <Text textColor='tertiary'>
      On n'a plus <strong>une</strong> application
    </Text>
    <Appear>
      <Text textColor='tertiary'>
        On a <strong>plusieurs</strong> petites applications
      </Text>
    </Appear>
  </Slide>,
  <Slide key='1-1-3-0'>
    <Text textColor='tertiary'>
      Show me the code
    </Text>
  </Slide>,
  <Slide key='1-1-3-0'>
    <Text textColor='tertiary'>Stateless Components</Text>
    <CodePane
      textAlign='left'
      lang='jsx'
      source={require('raw!../assets/technique/stateless.example')}
      margin='2em auto'
      textSize='0.8em'
      bgColor='#3e3e3e'
    />
  </Slide>,
  <Slide key='1-1-3-0'>
    <Text textColor='tertiary'>Stateful Component</Text>
    <CodePane
      textAlign='left'
      lang='jsx'
      source={require('raw!../assets/technique/stateful.example')}
      margin='2em auto'
      textSize='0.8em'
      bgColor='#3e3e3e'
    />
  </Slide>,
  <Slide key='1-1-3-0' notes={`Procédural => Fonctionnel (Immutabilité, Composition, ...)<br /> React fait découvrir les bonnes pratiques`}>
    <Text textColor='tertiary' lineHeight={2}>
      L'API n'est pas beaucoup plus épaisse
    </Text>
    <Appear>
      <Text textColor='tertiary'>Mais il faut s'approprier le <strong>paradigme</strong></Text>
    </Appear>
  </Slide>,
]
