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
} from 'react-admin'

export const eventCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="date" />
            <TextInput source="schedule" />
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
            <TextInput source="date" />
            <TextInput source="schedule" />
        </SimpleForm>
    </Edit>
)

export const eventList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="date" />
            <TextField source="schedule" />
        </Datagrid>
    </List>
)
