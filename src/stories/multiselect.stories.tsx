import { MultiSelect } from '../components/MultiSelect';
import { SelectItem } from '../components/SelectItem';

export default {
    title: 'Components/MultiSelect',
    component: MultiSelect,
};

export const Standard = () => {
    return (
        <div className="w-96">
            <MultiSelect aria-label="Standard MultiSelect" placeholder="Choose your toppings" className="w-96" onSelectionChange={(newSelection) => console.log(newSelection)}>
                <SelectItem id="cheese" textValue="Cheese">Cheese</SelectItem>
                <SelectItem id="lettuce" textValue="Lettuce">Lettuce</SelectItem>
                <SelectItem id="tomato" textValue="Tomato">Tomato</SelectItem>
                <SelectItem id="onion" textValue="Onion">Onion</SelectItem>
                <SelectItem id="pickles" textValue="Pickles">Pickles</SelectItem>
            </MultiSelect>
        </div>
    );
};

export const Error = () => (
    <div className="w-96">
        <MultiSelect hasError aria-label="Error Select">
            <SelectItem id="one" textValue="One">One</SelectItem>
            <SelectItem id="two" textValue="Two">Two</SelectItem>
            <SelectItem id="three" textValue="Three">Three</SelectItem>
        </MultiSelect>
    </div>
);

export const Disabled = () => (
    <div className="space-y-1 w-96">
        <MultiSelect placeholder="Normal" aria-label="Normal Select">
            <SelectItem id="one" textValue="One">One</SelectItem>
            <SelectItem id="two" textValue="Two">Two</SelectItem>
            <SelectItem id="three" textValue="Three">Three</SelectItem>
        </MultiSelect>

        <MultiSelect placeholder="Disabled" isDisabled aria-label="Disabled Select">
            <SelectItem id="one" textValue="One">One</SelectItem>
            <SelectItem id="two" textValue="Two">Two</SelectItem>
            <SelectItem id="three" textValue="Three">Three</SelectItem>
        </MultiSelect>

        <MultiSelect placeholder="Disabled" defaultSelectedKeys={["one"]} isDisabled aria-label="Disabled with Selection">
            <SelectItem id="one" textValue="Disabled with Selection">Disabled with Selection</SelectItem>
            <SelectItem id="two" textValue="Two">Two</SelectItem>
            <SelectItem id="three" textValue="Three">Three</SelectItem>
        </MultiSelect>
    </div>
);