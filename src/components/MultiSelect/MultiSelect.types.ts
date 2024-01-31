import { ListBoxProps as AriaListBoxProps } from 'react-aria-components';
import { TailwindColor } from '../../shared/tailwind.types';

type ChildrenFunction<T> = (item: T) => React.ReactNode;

interface MultiSelectProps<T extends object> extends Omit<AriaListBoxProps<T>, 'children' | 'onSelectionChange'> {
    children: React.ReactNode | ChildrenFunction<T>;
    className?: string;
    focusColor?: TailwindColor;
    hasError?: boolean;
    items?: Iterable<T>;
}

export type { MultiSelectProps };