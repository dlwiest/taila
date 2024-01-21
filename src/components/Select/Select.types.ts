import { SelectProps as AriaSelectProps } from 'react-aria-components';
import { TailwindColor } from '../../shared/tailwind.types';

type ChildrenFunction<T> = (item: T) => React.ReactNode;

interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, 'children'> {
    children: React.ReactNode | ChildrenFunction<T>;
    className?: string;
    focusColor?: TailwindColor;
    hasError?: boolean;
    items?: Iterable<T>;
    placeholder?: string;
}

export type { SelectProps };