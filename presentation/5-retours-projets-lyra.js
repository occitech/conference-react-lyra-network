import React from 'react'
import {Slide, Heading, Text, Appear, CodePane, List, ListItem, Image} from 'spectacle'
import preloader from 'spectacle/lib/utils/preloader'

const images = {
    archi:      require('../assets/image/sepamail/archi.png'),
    table:      require('../assets/image/sepamail/table.png'),
    formCreate: require('../assets/image/sepamail/form-create.png'),
    formUpdate: require('../assets/image/sepamail/form-update.png'),
    formView:   require('../assets/image/sepamail/form-view.png'),
}

preloader(images)

export default [
    <Slide key='sepa-0'>
        <Heading textColor='secondary' fit caps>
            Sepamail
        </Heading>
    </Slide>,
    <Slide key='sepa-1'>
        <Text textColor='secondary' textSize='2em'>
            Architecture
        </Text>
        <Appear>
            <Image src={images.archi} width={400}/>
        </Appear>
    </Slide>,
    <Slide key='sepa-2'>
        <Text textColor='secondary' textSize='2em'>Stack front</Text>
        <Appear>
            <List>
                <ListItem>npm</ListItem>
                <ListItem>babel</ListItem>
                <ListItem>node-sass</ListItem>
                <ListItem>grunt</ListItem>
                <ListItem>58 modules</ListItem>
            </List>
        </Appear>
    </Slide>,
    <Slide key='sepa-3'>
        <Text textColor='secondary' textSize='2em'>Lib tierces</Text>
        <Appear>
            <List>
                <ListItem>react-router</ListItem>
                <ListItem>redux</ListItem>
                <ListItem>react-bootstrap</ListItem>
            </List>
        </Appear>
    </Slide>,
    <Slide key='sepa-4'>
        <Text textColor='secondary' textSize='2em'>Point d'entrée</Text>
        <List>
            <ListItem>index.html</ListItem>
            <List>
                <ListItem>styles.css</ListItem>
                <ListItem>app.js</ListItem>
                <ListItem>DIV#app-container</ListItem>
            </List>
        </List>
        <Appear>
            <List>
                <ListItem>main.jsx</ListItem>
                <List>
                    <ListItem>Router</ListItem>
                </List>
            </List>
        </Appear>
    </Slide>,
    <Slide key='sepa-5'>
        <Image src={images.table} height='50%'/>
    </Slide>,
    <Slide key='sepa-6'>
        <CodePane
            lang='jsx'
            source={require('raw!../assets/retours-projets-lyra/table.example')}
            textSize='0.8em'
        />
        <Image src={images.table} height='50%'/>
    </Slide>,
    <Slide key='sepa-7'>
        <Image src={images.formCreate} height='50%'/>
    </Slide>,
    <Slide key='sepa-8'>
        <Image src={images.formUpdate} height='50%'/>
    </Slide>,
    <Slide key='sepa-9'>
        <Image src={images.formView} height='50%'/>
    </Slide>,
    <Slide key='bp-0'>
        <Heading textColor='secondary' fit caps>
            Bonnes pratiques
        </Heading>
    </Slide>,
    <Slide key='bp-redux-0'>
        <Text textColor='secondary' textSize='2em'>
            Redux
        </Text>
        <Appear>
            <List>
                <ListItem>Store > React component state</ListItem>
            </List>
        </Appear>
        <Appear>
            <List>
                <ListItem>Middlewares</ListItem>
                <List>
                    <ListItem>promise middleware</ListItem>
                    <ListItem>errorManager</ListItem>
                </List>
            </List>
        </Appear>
        <Appear>
            <List>
                <ListItem>reducer utils</ListItem>
                <List>
                    <ListItem>change</ListItem>
                </List>
            </List>
        </Appear>
    </Slide>,
    <Slide key='futur-0'>
        <Heading textColor='secondary' fit caps>
            Futur
        </Heading>
    </Slide>,
    <Slide key='futur-electron'>
        <Text textColor='secondary' textSize='2em'>
            Electron
        </Text>
        <Text textAlign='left' textColor='tertiary'>
            Applis desktop (Linux / MacOS / Windows) en JS, HTML & CSS
        </Text>
    </Slide>,
    <Slide key='futur-react-native'>
        <Text textColor='secondary' textSize='2em'>
            React-Native
        </Text>
        <Text textAlign='left' textColor='tertiary'>
            Applis mobiles natives (iOS / Android) en JavaScript avec React
        </Text>
        <Appear>
            <Text textAlign='left' textColor='tertiary'>
                Utilise les mêmes blocs d'UI qu'une app native
            </Text>
        </Appear>
    </Slide>,
]
