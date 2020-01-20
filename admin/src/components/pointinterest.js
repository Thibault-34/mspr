import React from 'react'
import {
    Create,
    SimpleForm,
    TextInput,
    Edit,
    List,
    Datagrid,
    TextField,
    ReferenceInput,
    SelectInput,
    ReferenceField,
    SelectField,
} from 'react-admin'

export const pointinterestCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
)

export const pointinterestEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="localisation_id" />
        </SimpleForm>
    </Edit>
)

export const pointinterestList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
)
