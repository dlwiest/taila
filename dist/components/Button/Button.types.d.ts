import { ReactNode } from 'react';
import { ButtonProps as AriaButtonProps } from 'react-aria-components';
import { TailwindColor } from '../../shared/tailwind.types';
interface ButtonProps extends AriaButtonProps {
    color?: TailwindColor;
    children?: ReactNode;
}
export type { ButtonProps };
