import React from 'react'
import {Slide, Heading, Text, Appear, CodePane, List, ListItem} from 'spectacle'

export default [
  <Slide key='3-0'>
    <Heading fit caps>
      Migrer vers du React
    </Heading>
  </Slide>,
  <Slide key='3-1-0' notes={`Etant une librairie qui n'a pas besoin de grand chose, ca peut être utilisé de manière progressive`}>
    <Text>
      React ce n'est qu'une librairie
    </Text>
  </Slide>,
  <Slide key='3-1-1' notes={`Exemple d'utilisation dans un framework`}>
    <Text>
      Angular - ngReact
    </Text>
  </Slide>,
  <Slide key='3-1-2' notes={`Exemple d'utilisation dans un framework`}>
    <Text>
      Backbone - React
    </Text>
  </Slide>,
  <Slide key='3-1-3' notes={`Exemple d'utilisation au milieu de nul part. Par contre, gérer votre état de manière globale sera important.`}>
    <Text>
      {`$('.selector').each(() => ReactDOM.render(<Element />, this))`}
    </Text>
  </Slide>,
  <Slide key='3-1-4' notes={`Si des bouts sont liés`}>
    <Text lineHeight={2}>
      Quand l'utiliser ?
    </Text>
    <List>
      <Appear>
        <ListItem>
          Beaucoup d'interactions
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Des données qui changent dans le temps
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Des vues qui dépendent des données
        </ListItem>
      </Appear>
    </List>
  </Slide>,
  <Slide key='3-2-0' notes={`Exemple appli cartographie => Gain notamment sur la mise à jour des options disponibles. Y compris par rapport au niveau de zoom`}>
    <Text>Migration de l'UI d'une cartographie</Text>
    <Text>Schema</Text>
  </Slide>,
  <Slide key='3-2-1' notes={`Exemple appli cartographie`}>
    <Text>Migration progressive</Text>
    <List>
      <Appear><ListItem>Tooltips</ListItem></Appear>
      <Appear><ListItem>Données à afficher</ListItem></Appear>
      <Appear><ListItem>Choix de la carte</ListItem></Appear>
    </List>
  </Slide>,
  <Slide key='3-2-2' notes={`Pas besoin donc on ne va pas trop loin`}>
    <Text>L'application finale n'est pas un seul composant React</Text>
  </Slide>,
  <Slide key='3-3-0' notes={`Quelques bonnes pratiques`}>
    <Heading fit caps>Quelques bonnes pratiques</Heading>
  </Slide>,
  <Slide key='3-3-1' notes={`Quelques bonnes pratiques`}>
    <Text textSize='2em'>Préferrez trop découper que pas assez</Text>
    <Appear>
      <Text><br />pas de if, pas de boucle, pas de variables<br />CodeExample</Text>
    </Appear>
  </Slide>,
  <Slide key='3-3-3' notes={`Attention, ca ne veut pas dire stateful vs stateless.<br />En plus ca permet de ne pas être trop couplé à React => Controllers`}>
    <Text textSize='2em'>Séparer l'UI du métier</Text>
    <Appear>
      <Text><br />Smart vs Dumb<br />Container vs Component</Text>
    </Appear>
  </Slide>,
  <Slide key='3-3-2' notes={`Préparer RN.<br /> En plus ca permettrait de changer de lib de vue. Chercher virtual DOM`}>
    <Text textSize='2em'>Balises HTML le plus tard possible</Text>
    <Appear>
      <Text><br />Force à se poser des questions sur la réutilisabilité de l'UI</Text>
    </Appear>
    <Appear>
      <Text>Permet de préparer le multi-plateforme</Text>
    </Appear>
  </Slide>,
  <Slide key='3-3-3' notes={`Développez vos composants de manière isolée`}>
    <Text textSize='2em'>Un composant doit fonctionner seul</Text>
    <Appear>
      <Text><br />React-Storybook</Text>
    </Appear>
    <Appear>
      <Text>Screenshot</Text>
    </Appear>
  </Slide>
]
