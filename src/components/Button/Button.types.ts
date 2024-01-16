import { ReactNode } from 'react';
import { ButtonProps as AriaButtonProps } from 'react-aria-components';
import { Sizes, TailwindColor } from '../../shared/tailwind.types';

type ButtonVariants = 'default' | 'soft'

interface ButtonProps extends AriaButtonProps {
    color?: TailwindColor;
    size?: Sizes;
    variant?: ButtonVariants;
    children?: ReactNode;
};

export type { ButtonProps }
