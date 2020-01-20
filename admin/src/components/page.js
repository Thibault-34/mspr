import React from 'react'
import {
    Create,
    SimpleForm,
    TextInput,
    Edit,
    List,
    Datagrid,
    TextField,
    ReferenceField,
    SelectField,
} from 'react-admin'

export const pageCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="content" />
        </SimpleForm>
    </Create>
)

export const pageEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="content" />
        </SimpleForm>
    </Edit>
)

export const pageList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="content" maxLength="300" />
        </Datagrid>
    </List>
)
