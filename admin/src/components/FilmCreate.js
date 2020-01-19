import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const FilmCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<TextInput source="style" />
			<TextInput source="image" />
			<TextInput source="description" />
			<TextInput source="facebook" />
			<TextInput source="instagram" />
			<TextInput source="spotify" />
		</SimpleForm>
	</Create>
);
