import React, { useState } from 'react';
import { Section, SpecSectionProps } from './types';
import theme from 'theme/theme';
import { TextWithIcon } from 'components/TextWithIcon';
import { FieldInput, NewSpecField, SpecsWrapper, VersionHeading } from './styles';

const SpectSectionComponent: React.FC<SpecSectionProps> = ({
    sections
}) => {
    const [currentSections, setCurrentSections] = useState<Section[]>(sections);

    const handleAddSection = () => {
        setCurrentSections([...currentSections, { title: "Nueva Sección", fields: [] }]);
    };

    const handleRemoveSection = (index: number) => {
        const newSections = [...currentSections];
        newSections.splice(index, 1);
        setCurrentSections(newSections);
    };

    const handleRenameSection = (index: number, newTitle: string) => {
        const newSections = [...currentSections];
        newSections[index].title = newTitle;
        setCurrentSections(newSections);
    };

    const handleAddField = (sectionIndex: number) => {
        const newSections = [...currentSections];
        newSections[sectionIndex].fields.push("");
        setCurrentSections(newSections);
    };

    const handleRemoveField = (sectionIndex: number, fieldIndex: number) => {
        const newSections = [...currentSections];
        newSections[sectionIndex].fields.splice(fieldIndex, 1);
        setCurrentSections(newSections);
    };

    const handleFieldChange = (sectionIndex: number, fieldIndex: number, value: string) => {
        const newSections = [...currentSections];
        newSections[sectionIndex].fields[fieldIndex] = value;
        setCurrentSections(newSections);
    };

    return (
        <div>
            {currentSections.map((section, index) => (
                <div key={index}>
                    <SpecsWrapper>
                        <VersionHeading type="text" placeholder={section.title + '...'} onChange={(e) => handleRenameSection(index, e.target.value)} />
                        <TextWithIcon
                            button
                            color={theme.color.danger}
                            icon="RemoveCircle"
                            onClick={() => { handleRemoveSection(index) }}
                            size="Small"
                            text="Eliminar sección"
                        />
                    </SpecsWrapper>
                    <hr />
                    <NewSpecField>
                        {section.fields.map((field, fieldIndex) => (
                            <li key={fieldIndex}>
                                <SpecsWrapper>
                                    <FieldInput type="text" placeholder='Nueva especificación...' value={field} onChange={(e) => handleFieldChange(index, fieldIndex, e.target.value)} />
                                    <TextWithIcon
                                        button
                                        color={theme.color.danger}
                                        icon="RemoveCircle"
                                        onClick={() => { handleRemoveField(index, fieldIndex) }}
                                        size="Small"
                                        text="Eliminar"
                                    />
                                </SpecsWrapper>
                                <hr />
                            </li>
                        ))}
                    </NewSpecField>
                    <TextWithIcon
                        button
                        color={theme.color.sheen}
                        icon="AddCircle"
                        onClick={() => { handleAddField(index) }}
                        size="Small"
                        text="Agregar especificación"
                    />

                    <hr />
                </div>
            ))}
            <TextWithIcon
                button
                color={theme.color.sheen}
                icon="AddCircle"
                onClick={() => { handleAddSection() }}
                size="Small"
                text="Agregar sección de especificaciones"
            />
            <hr />
        </div>
    );
};

export default SpectSectionComponent;