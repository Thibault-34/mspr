import React from 'react'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

import { ArtistList } from './components/ArtistList'
import { ArtistEdit } from './components/ArtistEdit'
import { ArtistCreate } from './components/ArtistCreate'

const dataProvider = jsonServerProvider('http://localhost:8000')
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource
            name="artists"
            list={ArtistList}
            edit={ArtistEdit}
            create={ArtistCreate}
        />
    </Admin>
)

export default App
