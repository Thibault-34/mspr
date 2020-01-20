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
    DateField,
    DateInput,
} from 'react-admin'

export const eventCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <DateInput source="date" locales="fr-FR" />
            <TextInput source="schedule" helperText="HH:MM:SS" />
            <ReferenceInput
                label="Artiste"
                source="artiste_id"
                reference="artists"
            >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Scène" source="scene_id" reference="scenes">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
)

export const eventEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DateInput source="date" locales="fr-FR" />
            <TextInput source="schedule" helperText="HH:MM:SS" />
        </SimpleForm>
    </Edit>
)

export const eventList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField source="date" locales="fr-FR" />
            <TextField source="schedule" />
            <ReferenceField label="Scène" source="scene_id" reference="scenes">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField
                label="Artiste"
                source="artiste_id"
                reference="artists"
            >
                <TextField source="name" />
            </ReferenceField>
        </Datagrid>
    </List>
)
