import { ListBoxItemProps as AriaListBoxItemProps } from 'react-aria-components';
import { TailwindColor } from '../../shared/tailwind.types';

interface SelectItemProps extends AriaListBoxItemProps {
    children: React.ReactNode;
    className?: string;
    focusColor?: TailwindColor;
    textValue: string;
}

export type { SelectItemProps };