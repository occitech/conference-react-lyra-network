import React from 'react'
import {
  Slide,
  Heading,
  Text,
  Appear,
  CodePane,
  List,
  ListItem,
  Image
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'
import preloader from 'spectacle/lib/utils/preloader'

const images = {
  declaratif: require('../assets/image/declaratif.png'),
  imperatif: require('../assets/image/imperatif.png'),
  application: require('../assets/image/application.png')
}
preloader(images)

export default [
  <Slide key='1-0'>
    <Heading textColor='secondary' fit caps>
      Point technique
    </Heading>
  </Slide>,
  <Slide key='1-1-3-0'>
    <Text textColor='tertiary'>
      Commençons par du code
    </Text>
  </Slide>,
  <CodeSlide
    key='1-1-3-1'
    transition={[]}
    lang='jsx'
    code={require('raw!../assets/technique/stateless.example')}
    ranges={[
      {loc: [0, 4]},
      {loc: [1, 2]},
      {loc: [2, 3]},
      {loc: [0, 4]},
      {loc: [5, 6]},
      {loc: [6, 8]},
      {loc: [8, 12]},
      {loc: [6, 13]},
      {loc: [14, 17]},
      {loc: [31, 32]},
      {loc: [32, 37]},
      {loc: [18, 19]},
      {loc: [19, 29]},
      {loc: [24, 28]},
      {loc: [31, 40]},
      {loc: [42, 49]},
      {loc: [50, 55]}
    ]}
  />,
  <Slide key='1-1-3-0' notes={`Procédural => Fonctionnel (Immutabilité, Composition, ...)<br /> React fait découvrir les bonnes pratiques`}>
    <Text textColor='tertiary'>
      L'API n'est pas beaucoup plus épaisse
    </Text>
    <Appear>
      <Text textColor='tertiary'><br />Mais il faut s'approprier le <strong>paradigme</strong></Text>
    </Appear>
    <Appear>
      <Text textColor='tertiary'><br />Procédural => Fonctionnel</Text>
    </Appear>
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
    <Text textColor='tertiary'><span style={{color: '#61dafb'}}>Résultat 1 :</span><br />On se moque des détails d'implémentations</Text>
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
  </Slide>,
  <Slide key='1-1-1-8' notes={`Affichage déterministe => On a toujours la même chose on se moque de la transition`}>
    <Text textColor='tertiary'><span style={{color: '#61dafb'}}>Résultat 2 :</span><br />C'est maintenable</Text>
    <Appear>
      <Text textColor='quartenary'><br />UI = f(props, state)</Text>
    </Appear>
  </Slide>,
  <Slide key='1-1-1-9' notes={`Une appli à la JQuery`}>
    <Image src={images.imperatif} width='60%' />
    <Text textColor='tertiary' textSize='0.8em' margin='1em auto'>Schema Impératif</Text>
  </Slide>,
  <Slide key='1-1-1-11' notes={`Une appli React`}>
    <Image src={images.declaratif} width='80%' />
    <Text textColor='tertiary' textSize='0.8em' margin='1em auto'>Schema Déclaratif</Text>
  </Slide>,
  <Slide key='1-1-2-0'>
    <Text textColor='tertiary' textSize='2em'>
      Approche par composant
    </Text>
    <Appear>
      <Text textColor='quartenary' lineHeight={2}>
        React ce n'est <strong>pas</strong> le V de MVC
      </Text>
    </Appear>
  </Slide>,
  <Slide key='1-1-2-1'>
    <Image src={images.application} width='80%' />
    <Text textColor='tertiary' textSize='0.8em' margin='1em auto'>Schema Application</Text>
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
  </Slide>
]
