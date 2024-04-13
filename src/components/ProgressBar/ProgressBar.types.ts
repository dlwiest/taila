import { ProgressBarProps as AriaProgressBarProps } from 'react-aria-components';
import { TailwindColor } from '../../shared/tailwind.types';

interface ProgressBarProps extends AriaProgressBarProps {
    className?: string;
    color?: TailwindColor;
};

export type { ProgressBarProps }
