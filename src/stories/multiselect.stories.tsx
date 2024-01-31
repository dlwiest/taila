import { MultiSelect } from '../components/MultiSelect';
import { SelectItem } from '../components/SelectItem';

export default {
    title: 'Components/MultiSelect',
    component: MultiSelect,
};

export const Standard = () => {
    const onSelectionChange = (newSelection: Selection) => {
        console.log('new selection', newSelection);

    }
    return (
        <div className="w-96">
            <MultiSelect aria-label="Standard MultiSelect">
                <SelectItem id="one" textValue="One">One</SelectItem>
                <SelectItem id="two" textValue="Two">Two</SelectItem>
                <SelectItem id="three" textValue="Three">Three</SelectItem>
            </MultiSelect>
        </div>
    );
};
