import React from 'react'
import {Spectacle, Deck} from 'spectacle'
import preloader from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'

import intro from './0-intro'
import technique from './1-technique'
import ecosysteme from './2-ecosysteme'
import migration from './3-migration'
import retoursLyra from './4-retours-projets-lyra'
import frontCommerce from './5-front-commerce'
import conclusion from './6-conclusion'

require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png')
}

preloader(images)

const theme = createTheme({
  primary: '#eeeeee',
  black: '#444444',
  red: '#ff4444'
})

export default class Presentation extends React.Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} transitionDuration={500}>
          {[
            ...intro,
            ...technique,
            ...ecosysteme,
            ...migration,
            ...retoursLyra,
            ...frontCommerce,
            ...conclusion
          ]}
        </Deck>
      </Spectacle>
    )
  }
}
