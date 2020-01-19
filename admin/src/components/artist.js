import React from 'react'
import {
    Create,
    SimpleForm,
    TextInput,
    Edit,
    List,
    Datagrid,
    TextField,
} from 'react-admin'

export const ArtistCreate = props => (
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
)

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
)

export const ArtistList = props => (
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
)
