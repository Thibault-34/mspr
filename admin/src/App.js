import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { FilmList } from './components/FilmList';
import { FilmEdit } from './components/FilmEdit';
import { FilmCreate } from './components/FilmCreate';

const dataProvider = jsonServerProvider('http://localhost:8000/api');
const App = () => (
	<Admin dataProvider={dataProvider}>
		<Resource
			name="artists"
			list={FilmList}
			edit={FilmEdit}
			create={FilmCreate}
		/>
	</Admin>
);

export default App;
