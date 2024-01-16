import { ReactNode } from 'react';
import { ButtonProps as AriaButtonProps } from 'react-aria-components';

interface ButtonProps extends AriaButtonProps {
    color?: string;
    children?: ReactNode;
};

export type { ButtonProps }
