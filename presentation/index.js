import React from 'react'
import {Spectacle, Deck} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

import intro from './0-intro'
import technique from './1-technique'
import ecosysteme from './2-ecosysteme'
import migration from './3-migration'
import frontCommerce from './4-front-commerce'
import retoursLyra from './5-retours-projets-lyra'
import conclusion from './6-conclusion'

require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const theme = createTheme({
  primary: '#2d2d2d',
  secondary: '#61dafb',
  tertiary: '#e9e9e9',
  quartenary: '#cc7a6f'
}, {
  primary: 'Open Sans Condensed',
  secondary: 'Lato'
})

export default class Presentation extends React.Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} transitionDuration={500} progress='none' controls={false}>
          {[
            ...intro,
            ...technique,
            ...ecosysteme,
            ...migration,
            ...frontCommerce,
            ...retoursLyra,
            ...conclusion
          ]}
        </Deck>
      </Spectacle>
    )
  }
}
