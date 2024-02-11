import { ToggleButtonProps as AriaToggleButtonProps } from 'react-aria-components';
import { TailwindColor } from '../../shared/tailwind.types';
import { ReactNode } from 'react';

interface ToggleSwitchProps extends AriaToggleButtonProps {
    children?: ReactNode;
    className?: string;
    color?: TailwindColor;
    hasError?: boolean;
};

export type { ToggleSwitchProps }
