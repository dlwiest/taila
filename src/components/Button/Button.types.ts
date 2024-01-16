import { ReactNode } from 'react';
import { ButtonProps as AriaButtonProps } from 'react-aria-components';
import { Sizes, TailwindColor } from '../../shared/tailwind.types';

interface ButtonProps extends AriaButtonProps {
    color?: TailwindColor;
    size?: Sizes;
    children?: ReactNode;
};

export type { ButtonProps }
