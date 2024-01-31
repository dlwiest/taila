import { ListBoxProps as AriaListBoxProps } from 'react-aria-components';
import { TailwindColor } from '../../shared/tailwind.types';

type ChildrenFunction = (item: Item) => React.ReactNode;

type Item = {
    id: any;
    name: string;
}

interface MultiSelectProps extends Omit<AriaListBoxProps<Item>, 'children' | 'onSelectionChange'> {
    children: React.ReactNode | ChildrenFunction;
    className?: string;
    defaultSelectedKeys?: any[];
    focusColor?: TailwindColor;
    hasError?: boolean;
    items?: Iterable<(Item)>;
    placeholder?: string;
}

export type { MultiSelectProps };