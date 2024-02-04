import { ToggleButtonProps as AriaToggleButtonProps } from 'react-aria-components';
import { TailwindColor } from '../../shared/tailwind.types';

interface ToggleSwitchProps extends AriaToggleButtonProps {
    className?: string;
    color?: TailwindColor;
    hasError?: boolean;
};

export type { ToggleSwitchProps }
