import { MultiSelect } from '../components/MultiSelect';
import { SelectItem } from '../components/SelectItem';

export default {
    title: 'Components/MultiSelect',
    component: MultiSelect,
};

export const Standard = () => {
    return (
        <div className="w-96">
            <MultiSelect aria-label="Standard MultiSelect" placeholder="Choose your toppings" className="w-96" defaultSelectedKeys={['cheese']}>
                <SelectItem id="cheese" textValue="Cheese">Cheese</SelectItem>
                <SelectItem id="lettuce" textValue="Lettuce">Lettuce</SelectItem>
                <SelectItem id="tomato" textValue="Tomato">Tomato</SelectItem>
                <SelectItem id="onion" textValue="Onion">Onion</SelectItem>
                <SelectItem id="pickles" textValue="Pickles">Pickles</SelectItem>
            </MultiSelect>
        </div>
    );
};
