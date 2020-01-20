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

export const pointinteresttocategoryCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput
                label="categorie"
                source="category_id"
                reference="categoryofpointinterests"
            >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput
                label="Point d'intêret"
                source="pointinterest_id"
                reference="pointinterests"
            >
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
)

export const pointinteresttocategoryEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput
                label="categorie"
                source="category_id"
                reference="categoryofpointinterests"
            >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput
                label="Point d'intêret"
                source="pointinterest_id"
                reference="pointinterests"
            >
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
)

export const pointinteresttocategoryList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="category_id" />
            <ReferenceField
                label="categorie"
                source="category_id"
                reference="categoryofpointinterests"
            >
                <TextField source="id" />
            </ReferenceField>
            {/* <ReferenceField
                label="Point d'intêret"
                source="id"
                reference="pointinterests"
            >
                <TextField optionText="name" />
            </ReferenceField> */}
        </Datagrid>
    </List>
)
