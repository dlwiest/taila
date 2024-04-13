import { ReactNode } from 'react';
import { ButtonProps as AriaButtonProps } from 'react-aria-components';
import { Sizes, TailwindColor } from '../../shared/tailwind.types';

export type ButtonVariants = 'default' | 'soft' | 'outline'

interface ButtonProps extends AriaButtonProps {
    className?: string;
    color?: TailwindColor;
    rounded?: boolean;
    size?: Sizes;
    variant?: ButtonVariants;
    loading?: boolean;
    children?: ReactNode;
};

export type { ButtonProps }
