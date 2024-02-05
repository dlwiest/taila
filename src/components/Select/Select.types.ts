import { SelectProps as AriaSelectProps } from 'react-aria-components';
import { TailwindColor } from '../../shared/tailwind.types';

type ChildrenFunction = (item: Item) => React.ReactNode;

type Item = {
    id: any;
    name: string;
}

interface SelectProps extends Omit<AriaSelectProps<Item>, 'children'> {
    children?: React.ReactNode | ChildrenFunction;
    className?: string;
    focusColor?: TailwindColor;
    hasError?: boolean;
    items?: Iterable<Item>;
    placeholder?: string;
}

export type { SelectProps };
