import { ReactNode } from 'react';
import { ButtonProps as AriaButtonProps } from 'react-aria-components';
import { Sizes, TailwindColor } from '../../shared/tailwind.types';
type ButtonVariants = 'default' | 'soft' | 'outline';
interface ButtonProps extends AriaButtonProps {
    className?: string;
    color?: TailwindColor;
    rounded?: boolean;
    size?: Sizes;
    variant?: ButtonVariants;
    children?: ReactNode;
}
export type { ButtonProps };
