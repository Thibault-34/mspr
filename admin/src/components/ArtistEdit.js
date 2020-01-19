import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const ArtistEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<TextInput source="style" />
			<TextInput source="image" />
			<TextInput source="description" />
			<TextInput source="facebook" />
			<TextInput source="instagram" />
			<TextInput source="spotify" />
		</SimpleForm>
	</Edit>
);
