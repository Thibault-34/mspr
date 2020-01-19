import React from 'react'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

import { ArtistList } from './components/artist'
import { ArtistEdit } from './components/artist'
import { ArtistCreate } from './components/artist'
import { eventList } from './components/event'
import { eventEdit } from './components/event'
import { eventCreate } from './components/event'
import { sceneList } from './components/scene'
import { sceneEdit } from './components/scene'
import { sceneCreate } from './components/scene'
import { pageList } from './components/page'
import { pageEdit } from './components/page'
import { pageCreate } from './components/page'

const dataProvider = jsonServerProvider('http://localhost:8000')
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource
            name="artists"
            list={ArtistList}
            edit={ArtistEdit}
            create={ArtistCreate}
        />
        <Resource
            name="events"
            list={eventList}
            edit={eventEdit}
            create={eventCreate}
        />
        <Resource
            name="scenes"
            list={sceneList}
            edit={sceneEdit}
            create={sceneCreate}
        />
        <Resource
            name="pages"
            list={pageList}
            edit={pageEdit}
            create={pageCreate}
        />
    </Admin>
)

export default App
