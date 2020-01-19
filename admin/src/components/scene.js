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

export const sceneCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="localisation_id" />
            <ReferenceField source="localisations" reference="localisations">
                <SelectField source="name" />
            </ReferenceField>
        </SimpleForm>
    </Create>
)

export const sceneEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="localisation_id" />
            <ReferenceField source="localisations" reference="localisations">
                <SelectField source="name" />
            </ReferenceField>
        </SimpleForm>
    </Edit>
)

export const sceneList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
)
