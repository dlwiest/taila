import { useState } from 'react';
import { Select } from '../components/Select';
import { SelectItem } from '../components/SelectItem';
import { textColorClasses } from '../shared/tailwindClases';

export default {
    title: 'Components/Select',
    component: Select,
};

export const Color = () => {
    const [focusColor, setFocusColor] = useState<keyof typeof textColorClasses | undefined>();

    return (
        <div className="space-y-1 w-96">
            <Select
                aria-label="Color Select"
                onSelectionChange={(newSelection) => setFocusColor(newSelection as keyof typeof textColorClasses)}
                items={Object.keys(textColorClasses).map(color => ({ id: color as keyof typeof textColorClasses, name: color.charAt(0).toUpperCase() + color.slice(1) }))}
                focusColor={focusColor}
            >
                {(item: { id: keyof typeof textColorClasses, name: string; }) => (
                    <SelectItem focusColor={focusColor} className={`${textColorClasses[item.id]} hover:text-white`} textValue={item.name}>{item.name}</SelectItem>
                )}
            </Select>
        </div>
    );
};

export const Error = () => (
    <div className="w-96">
        <Select hasError aria-label="Error Select">
            <SelectItem id="one" textValue="One">One</SelectItem>
            <SelectItem id="two" textValue="Two">Two</SelectItem>
            <SelectItem id="three" textValue="Three">Three</SelectItem>
        </Select>
    </div>
);

export const Disabled = () => (
    <div className="space-y-1 w-96">
        <Select placeholder="Normal" aria-label="Normal Select">
            <SelectItem id="one" textValue="One">One</SelectItem>
            <SelectItem id="two" textValue="Two">Two</SelectItem>
            <SelectItem id="three" textValue="Three">Three</SelectItem>
        </Select>

        <Select isDisabled placeholder="Disabled" aria-label="Disabled Select">
            <SelectItem id="one" textValue="One">One</SelectItem>
            <SelectItem id="two" textValue="Two">Two</SelectItem>
            <SelectItem id="three" textValue="Three">Three</SelectItem>
        </Select>

        <Select isDisabled placeholder="Disabled" defaultSelectedKey="one" aria-label="Disabled with Selection">
            <SelectItem id="one" textValue="Disabled with Selection">Disabled with Selection</SelectItem>
            <SelectItem id="two" textValue="Two">Two</SelectItem>
            <SelectItem id="three" textValue="Three">Three</SelectItem>
        </Select>
    </div>
);
