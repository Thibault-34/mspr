import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const FilmList = props => (
	<List {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="name" />
			<TextField source="style" />
			<TextField source="image" />
			<TextField source="description" />
			<TextField source="facebook" />
			<TextField source="instagram" />
			<TextField source="spotify" />
		</Datagrid>
	</List>
);
